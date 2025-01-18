import { Elysia, t } from "elysia";
import { listStocks, detailStock } from "@/proxy/BrapiDev";
import queryParamsEncode from "@/traits/queryParamsEncode";
import swaggerDetail from "@/helpers/SwaggerDetail";
import TErrorFormatter from "@/traits/TErrorFormatter";

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
                        limit: t.Optional(t.Number({
                            examples: [ 12, 20, 50, 100 ],
                            default: 12,
                            minimum: 1,
                            error({ errors }) {
                                TErrorFormatter(errors)
                            }
                        })),
                        page: t.Optional(t.Number({
                            examples: [ 1, 2, 5, 10 ],
                            default: 1,
                            minimum: 1,
                            error({ errors }) {
                                TErrorFormatter(errors)
                            }
                        })),
                        sortBy: t.Optional(t.String({
                            examples: [ "name", "close", "change", "change_abs", "volume", "market_cap_basic" ],
                            minLength: 4,
                            maxLength: 16,
                            error({ errors }) {
                                TErrorFormatter(errors)
                            }
                        })),
                        sortOrder: t.Optional(t.String({
                            examples: [ "asc", "desc" ],
                            minLength: 3,
                            maxLength: 4,
                            error({ errors }) {
                                TErrorFormatter(errors)
                            }
                        })),
                    }),
                    detail: swaggerDetail("Get list of stocks", 200, "Stocks", true),
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
                        range: t.Optional(t.String({
                            examples: [ "1d", "5d", "1mo", "3mo" ],
                            default: "1mo",
                            minLength: 2,
                            maxLength: 3,
                            error({ errors }) {
                                TErrorFormatter(errors)
                            }
                        })),
                        interval: t.Optional(t.String({
                            examples: [ "1d" ],
                            default: "1d",
                            minLength: 2,
                            maxLength: 2,
                            error({ errors }) {
                                TErrorFormatter(errors)
                            }
                        })),
                        modules: t.Optional(t.String({
                            examples: [ "balanceSheetHistory", "balanceSheetHistoryQuarterly", "defaultKeyStatistics", "incomeStatementHistory", "incomeStatementHistoryQuarterly", "summaryProfile", "financialData" ],
                            default: "summaryProfile",
                            minLength: 13,
                            maxLength: 32,
                            error({ errors }) {
                                TErrorFormatter(errors)
                            }
                        })),
                    }),
                    params: t.Object({
                        ticker: t.String({
                            examples: [ "AAPL", "TSLA", "AMZN", "GOOGL" ],
                            minLength: 1,
                            maxLength: 5,
                            error({ errors }) {
                                TErrorFormatter(errors)
                            }
                        }),
                    }),
                    detail: swaggerDetail("Get detail of a stock", 200, "Stock", false),
                },
            ),
    );
}
