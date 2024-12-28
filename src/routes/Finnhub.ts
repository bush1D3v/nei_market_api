import {Elysia, t} from "elysia";
import {listCompanyNews, listMarketNews} from "@/proxy/Finnhub";
import formatDate from "@/utils/formatDate";
import queryParamsEncode from "@/traits/queryParamsEncode";
import swaggerDetail from "@/helpers/SwaggerDetail";

const from = new Date();
const to = new Date();

from.setDate(from.getDate() - 1);

const formattedFrom = formatDate(from);
const formattedTo = formatDate(to);

export function FinnhubRoutes(app: Elysia): Elysia {
	return app.use(
		new Elysia({
			name: "Finnhub Routes",
			aot: false,
			prefix: "/api/v1",
			detail: {
				tags: ["Finnhub"],
			},
		})
			.get(
				"/news",
				async ({query}) =>
					listMarketNews({
						query: queryParamsEncode(query),
					}),
				{
					query: t.Object({
						category: t.Optional(t.String({default: "crypto"})),
					}),
					detail: swaggerDetail("Get the latest market news", 200, "News", true),
				},
			)
			.get(
				"/company-news",
				async ({query}) =>
					listCompanyNews({
						query: queryParamsEncode(query),
					}),
				{
					query: t.Object({
						symbol: t.Optional(t.String({default: "AAPL"})),
						from: t.Optional(
							t.String({default: formattedFrom, description: "YYYY-MM-DD"}),
						),
						to: t.Optional(t.String({default: formattedTo, description: "YYYY-MM-DD"})),
					}),
					detail: swaggerDetail("Get the latest company news", 200, "News", true),
				},
			),
	);
}
