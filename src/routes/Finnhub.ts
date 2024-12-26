import {Elysia, t} from "elysia";
import {listCompanyNews, listMarketNews} from "@/proxy/Finnhub";
import formatDate from "@/utils/formatDate";
import queryParamsEncode from "@/traits/queryParamsEncode";

const from = new Date();
const to = new Date();

from.setDate(from.getDate() - 1);

const formattedFrom = formatDate(from);
const formattedTo = formatDate(to);

export function FinnhubRoutes(app: Elysia) {
	app.get(
		"/api/v1/news",
		async ({query}) =>
			listMarketNews({
				query: queryParamsEncode(query),
			}),
		{
			query: t.Object({
				category: t.Optional(t.String({default: "crypto"})),
			}),
			detail: {
				tags: ["Finnhub"],
			},
		},
	);
	app.get(
		"/api/v1/company-news",
		async ({query}) =>
			listCompanyNews({
				query: queryParamsEncode(query),
			}),
		{
			query: t.Object({
				symbol: t.Optional(t.String({default: "AAPL"})),
				from: t.Optional(t.String({default: formattedFrom})),
				to: t.Optional(t.String({default: formattedTo})),
			}),
			detail: {
				tags: ["Finnhub"],
			},
		},
	);
}
