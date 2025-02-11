import { GoogleGenerativeAI, type Part } from "@google/generative-ai";
import type { Socket } from "socket.io";
import type { ElysiaCustomStatusResponse } from "elysia/dist/error";
import catchErrors, { type CustomError, type CatchError } from "@/errors/catcher";

const genAI = new GoogleGenerativeAI(Bun.env.GEMINI_KEY);

let socket: Socket;

export const setSocket = (socketConnection: Socket) => {
    socket = socketConnection;
};

interface GeminiRequest {
    parts: Part[];
    sessionId: string;
}

/**
 * @description Handles the request to send a prompt to gemini via socket.io
 *
 * @param {Request} req - The request object
 * @param {Response} res - The response object
 * @returns {{ message: string }} Confirmation message
 * @throws {ElysiaCustomStatusResponse<number, CatchError>} If the request to the external API fails
 */
export async function generateContent({
    body,
}: { body: GeminiRequest }): Promise<
    { message: string } | ElysiaCustomStatusResponse<number, CatchError>
> {
    const { parts, sessionId }: GeminiRequest = body;

    const userText = parts[ 0 ].text as string;
    const botText = parts[ 1 ].text as string;
    const prompt = parts[ 2 ].text as string;

    try {
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
        const chat = model.startChat({
            history: [
                {
                    role: "user",
                    parts: [ { text: userText } ],
                },
                {
                    role: "model",
                    parts: [ { text: botText } ],
                },
            ],
        });
        const result = await chat.sendMessageStream(prompt);

        for await (const chunk of result.stream) {
            const text = chunk.text();
            const refs = chunk.candidates?.[ 0 ]?.citationMetadata?.citationSources?.[ 0 ]?.uri
                ? [ chunk.candidates[ 0 ].citationMetadata.citationSources[ 0 ].uri ]
                : [];

            if (socket) {
                try {
                    socket.emit("content", {
                        text,
                        refs,
                        sessionId,
                    });
                } catch (error) {
                    socket.emit("error", { error, sessionId });
                }
            }
        }
        if (socket) {
            socket.emit("content_end", sessionId);
        }
        return { message: " OK" };
    } catch (error: unknown) {
        socket.emit("error", { error, sessionId });
        const err = error as CustomError;
        return catchErrors({
            status: err?.status || 500,
            message: err?.message || "Internal Server Error",
            error,
        });
    }
}
