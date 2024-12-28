import { Elysia, t } from "elysia";
import { listStocks, detailStock } from "@/proxy/BrapiDev";
import queryParamsEncode from "@/traits/queryParamsEncode";
import swaggerDetail from "@/helpers/SwaggerDetail";

export function BrapiDevRoutes(app: Elysia): Elysia {
    return app.use(
        new Elysia({
            name: "BrapiDev Routes",
            aot: false,
            prefix: "/quote",
            detail: {
                tags: [ "BrapiDev" ],
            },
        })
            .get(
                "/list",
                async ({ query }) =>
                    listStocks({
                        query: queryParamsEncode(query),
                    }),
                {
                    query: t.Object({
                        limit: t.Optional(t.Number({ default: 12 })),
                        page: t.Optional(t.Number({ default: 1 })),
                        sortBy: t.Optional(t.String()),
                        sortOrder: t.Optional(t.String()),
                    }),
                    detail: swaggerDetail(
                        "Get list of stocks",
                        200,
                        "Stocks",
                        true
                    ),
                },
            )
            .get(
                "/:ticker",
                async ({ query, params }) =>
                    detailStock({
                        query: queryParamsEncode(query),
                        params,
                    }),
                {
                    query: t.Object({
                        range: t.Optional(t.String({ default: "1mo" })),
                        interval: t.Optional(t.String({ default: "1d" })),
                        modules: t.Optional(t.String({ default: "summaryProfile" })),
                    }),
                    params: t.Object({
                        ticker: t.String(),
                    }),
                    detail: swaggerDetail(
                        "Get detail of a stock",
                        200,
                        "Stock",
                        false
                    ),
                },
            ),
    );
}
