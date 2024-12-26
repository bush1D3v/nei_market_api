import {Elysia, t} from "elysia";
import {listStocks, detailStock} from "@/proxy/BrapiDev";
import queryParamsEncode from "@/traits/queryParamsEncode";

export function BrapiDevRoutes(app: Elysia) {
	app.get(
		"/quote/list",
		async ({query}) =>
			listStocks({
				query: queryParamsEncode(query),
			}),
		{
			query: t.Object({
				limit: t.Optional(t.Number({default: 12})),
				page: t.Optional(t.Number({default: 1})),
				sortBy: t.Optional(t.String()),
				sortOrder: t.Optional(t.String()),
			}),
			detail: {
				tags: ["BrapiDev"],
			},
		},
	);
	app.get(
		"/quote/:ticker",
		async ({query, params}) =>
			detailStock({
				query: queryParamsEncode(query),
				params,
			}),
		{
			query: t.Object({
				range: t.Optional(t.String({default: "1mo"})),
				interval: t.Optional(t.String({default: "1d"})),
				modules: t.Optional(t.String({default: "summaryProfile"})),
			}),
			params: t.Object({
				ticker: t.String(),
			}),
			detail: {
				tags: ["BrapiDev"],
			},
		},
	);
}
