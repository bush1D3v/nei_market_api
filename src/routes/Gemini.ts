import {Elysia, t} from "elysia";
import {generateContent} from "@/proxy/Gemini";
import swaggerDetail from "@/helpers/SwaggerDetail";

export function GenerativeAIRoutes(app: Elysia) {
	return app.use(
		new Elysia({
			name: "Generative AI Routes",
			aot: false,
			detail: {
				tags: ["GenerativeAI"],
			},
		}).post(
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
						{
							examples: [
								[
									{
										text: "teste",
									},
									{
										text: "teste",
									},
									{
										text: "What is NEI Market Analytics? /n Respond according to the user's language, directly and as briefly as possible. Text only.",
									},
								],
							],
							minItems: 3,
							maxItems: 3,
						},
					),
					sessionId: t.String({
						examples: ["b3cca1e3-9015-4d7a-b2f0-9b6231ce929f"],
						minLength: 36,
						maxLength: 36,
					}),
				}),
				detail: swaggerDetail("Google Gemini Chatbot via Socket.io", 200, "OK"),
			},
		),
	);
}
