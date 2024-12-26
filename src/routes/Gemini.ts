import {Elysia, t} from "elysia";
import generateContent from "@/proxy/Gemini";

export function GenerativeAIRoutes(app: Elysia) {
	app.post(
		"/gemini-generate",
		async ({body}) =>
			generateContent({
				body,
			}),
		{
			body: t.Object({
				parts: t.Array(
					t.Object({
						text: t.String(),
					}),
				),
				sessionId: t.String(),
			}),
			detail: {
				tags: ["GenerativeAI"],
			},
		},
	);
}
