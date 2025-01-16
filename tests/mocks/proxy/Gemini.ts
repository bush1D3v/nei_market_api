import {type Part} from "@google/generative-ai";
import SocketMock from "socket.io-mock";

interface GeminiRequest {
	parts: Part[];
	sessionId: string;
}

let socket: SocketMock;

export const setSocket = (socketInstance: SocketMock) => {
	socket = socketInstance;
};

export function generateContent({body}: {body: GeminiRequest}) {
	const {parts, sessionId}: GeminiRequest = body;

	const _userText = parts[0].text as string;
	const _botText = parts[1].text as string;
	const _prompt = parts[2].text as string;

	for (let index = 0; index < 5; index++) {
		const text = `Generated text ${index}`;
		const refs = [`https://example.com/${index}`];

		socket.emit("content", {
			text,
			refs,
			sessionId,
		});
	}
	socket.emit("content_end", sessionId);

	return {message: "OK"};
}
