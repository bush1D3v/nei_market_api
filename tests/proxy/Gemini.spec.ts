import {type Part} from "@google/generative-ai";
import {describe, expect, it, beforeEach, mock} from "bun:test";
import {setSocket} from "#/mocks/proxy/Gemini";
import responseProcessor from "#/helpers/responseProcessor";
import SocketMock from "socket.io-mock";
import app from "@/app";

interface GeminiRequest {
	parts: Part[];
	sessionId: string;
}

describe("Gemini Routes", () => {
	let socket: SocketMock;

	beforeEach(() => {
		socket = new SocketMock();
		setSocket(socket);
		socket.emit = mock(socket.emit);
	});

	describe("POST /gemini-generate", () => {
		const sessionId = "7d31c9a1-cdd8-43a4-957c-b526a2d6d146";
		const userText = "User text";
		const botText = "Bot text";
		const prompt = "Prompt text";
		const req = {
			body: {
				parts: [{text: userText}, {text: botText}, {text: prompt}],
				sessionId,
			},
		} as {body: GeminiRequest};

		it("Return a response", async () => {
			const {response, json} = await responseProcessor(app, "/gemini-generate", req.body);

			expect(response).toBeInstanceOf(Response);
			expect(response).toHaveProperty("status");
			expect(response.status).toBe(200);

			expect(json).toBeInstanceOf(Object);

			for (let index = 0; index < 5; index++) {
				const text = `Generated text ${index}`;
				const refs = [`https://example.com/${index}`];

				expect(socket.emit).toHaveBeenCalledWith("content", {text, refs, sessionId});
			}
			expect(socket.emit).toHaveBeenCalledWith("content_end", sessionId);
		});
	});
});
