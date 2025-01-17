import type { Part } from "@google/generative-ai";
import { describe, expect, it, beforeEach, mock } from "bun:test";
import { setSocket } from "#/mocks/proxy/Gemini";
import responseProcessor from "#/helpers/responseProcessor";
import SocketMock from "socket.io-mock";
import app from "@/app";

interface GeminiRequest {
    parts: Part[];
    sessionId: string;
}

describe("Gemini Routes", () => {
    let socket: SocketMock;
    let sessionId: string;
    let userText: string;
    let botText: string;
    let prompt: string;

    beforeEach(() => {
        sessionId = "7d31c9a1-cdd8-43a4-957c-b526a2d6d146";
        userText = "User text";
        botText = "Bot text";
        prompt = "Prompt text";

        socket = new SocketMock();
        setSocket(socket);
        socket.emit = mock(socket.emit);
    });

    describe("POST /gemini-generate", () => {
        it("Return a response", async () => {
            const req = {
                body: {
                    parts: [ { text: userText }, { text: botText }, { text: prompt } ],
                    sessionId,
                },
            } as { body: GeminiRequest };

            const { response, json } = await responseProcessor(app, "/gemini-generate", req.body);

            expect(response).toBeInstanceOf(Response);
            expect(response).toHaveProperty("status");
            expect(response.status).toBe(200);

            expect(json).toBeInstanceOf(Object);

            for (let index = 0; index < 5; index++) {
                const text = `Generated text ${index}`;
                const refs = [ `https://example.com/${index}` ];

                expect(socket.emit).toHaveBeenCalledWith("content", { text, refs, sessionId });
            }
            expect(socket.emit).toHaveBeenCalledWith("content_end", sessionId);
        });

        it("Handle body.parts Error", async () => {
            const req = {
                body: {
                    parts: [ { text: userText }, { text: botText } ],
                    sessionId,
                },
            } as { body: GeminiRequest };

            const { response, json } = await responseProcessor(app, "/gemini-generate", req.body);

            expect(response).toBeInstanceOf(Response);
            expect(response).toHaveProperty("status");
            expect(response.status).toBe(422);

            console.log(json);

            expect(json).toBeInstanceOf(Object);
            expect(json).toHaveProperty("message");
            expect(json).toHaveProperty("status");
            expect(json).toHaveProperty("error");
            expect(json).toHaveProperty("date");

            expect(json.message).toContain("Expected array length to be greater or equal to 3");
        });

        it("Handle body.sessionId Error", async () => {
            sessionId = "7d31c9a1-cdd8-43a4-957c-b526a2d6d1461";
            const req = {
                body: {
                    parts: [ { text: userText }, { text: botText }, { text: prompt } ],
                    sessionId,
                },
            } as { body: GeminiRequest };

            const { response, json } = await responseProcessor(app, "/gemini-generate", req.body);

            expect(response).toBeInstanceOf(Response);
            expect(response).toHaveProperty("status");
            expect(response.status).toBe(422);

            expect(json).toBeInstanceOf(Object);
            expect(json).toHaveProperty("message");
            expect(json).toHaveProperty("status");
            expect(json).toHaveProperty("error");
            expect(json).toHaveProperty("date");

            expect(json.message).toContain(sessionId);
        });

        it("Handle body.parts[0].text Error", async () => {
            userText = "";
            const req = {
                body: {
                    parts: [ { text: userText }, { text: botText }, { text: prompt } ],
                    sessionId,
                },
            } as { body: GeminiRequest };

            const { response, json } = await responseProcessor(app, "/gemini-generate", req.body);

            expect(response).toBeInstanceOf(Response);
            expect(response).toHaveProperty("status");
            expect(response.status).toBe(422);

            expect(json).toBeInstanceOf(Object);
            expect(json).toHaveProperty("message");
            expect(json).toHaveProperty("status");
            expect(json).toHaveProperty("error");
            expect(json).toHaveProperty("date");

            expect(json.message).toContain("Expected string length greater or equal to 1");
        });
    });
});
