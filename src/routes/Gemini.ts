import { Elysia, t } from "elysia";
import generateContent from "@/proxy/Gemini";

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
                            text: t.String(),
                        }),
                    ),
                    sessionId: t.String(),
                }),
            },
        )
    );
}
