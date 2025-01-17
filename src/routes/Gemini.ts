import { Elysia, t } from "elysia";
import { generateContent } from "@/proxy/Gemini";
import TErrorFormatter from "@/traits/TErrorFormatter";
import swaggerDetail from "@/helpers/SwaggerDetail";

export function GenerativeAIRoutes(app: Elysia) {
    return app.use(
        new Elysia({
            name: "Generative AI Routes",
            aot: false,
            detail: {
                tags: [ "GenerativeAI" ],
            },
        }).post(
            "/gemini-generate",
            async ({ body }) =>
                generateContent({
                    body,
                }),
            {
                body: t.Object({
                    parts: t.Array(
                        t.Object({
                            text: t.String({
                                examples: [ "What is NEI Market Analytics?" ],
                                error({ errors }) {
                                    TErrorFormatter(errors)
                                },
                                minLength: 1,
                            }),
                        }),
                        {
                            examples: [
                                [
                                    {
                                        text: "What is NEI Market Analytics?",
                                    },
                                    {
                                        text: "I'm here to help you with any questions you have about NEI Market Analytics. What would you like to know?",
                                    },
                                    {
                                        text: "What is NEI Market Analytics? /n Respond according to the user's language, directly and as briefly as possible. Text only.",
                                    },
                                ],
                            ],
                            error({ errors }) {
                                TErrorFormatter(errors)
                            },
                            minItems: 3,
                            maxItems: 3,
                        },
                    ),
                    sessionId: t.String({
                        examples: [ "b3cca1e3-9015-4d7a-b2f0-9b6231ce929f" ],
                        format: "uuid",
                        error({ errors }) {
                            TErrorFormatter(errors)
                        },
                    }),
                }),
                detail: swaggerDetail("Google Gemini Chatbot via Socket.io", 200, "OK"),
            },
        ),
    );
}
