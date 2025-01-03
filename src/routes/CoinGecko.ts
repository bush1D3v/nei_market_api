import {Elysia, t} from "elysia";
import {
	detailCryptoMarketChart,
	detailCryptoDescriptionData,
	listCryptoCurrencies,
} from "@/proxy/CoinGecko";
import queryParamsEncode from "@/traits/queryParamsEncode";
import swaggerDetail from "@/helpers/SwaggerDetail";

const from = new Date();
const to = new Date();

from.setDate(from.getDate() - 31);

export function CoinGeckoRoutes(app: Elysia): Elysia {
	return app.use(
		new Elysia({
			name: "Coin Gecko Routes",
			aot: false,
			prefix: "/coins",
			detail: {
				tags: ["CoinGecko"],
			},
		})
			.get(
				"/markets",
				async ({query}) =>
					listCryptoCurrencies({
						query: queryParamsEncode(query),
					}),
				{
					query: t.Object({
						vs_currency: t.Optional(t.String({default: "usd"})),
						per_page: t.Optional(t.Number({default: 12})),
						page: t.Optional(t.Number({default: 1})),
						precision: t.Optional(t.Number({default: 2})),
						price_change_percentage: t.Optional(t.String()),
						order: t.Optional(t.String()),
						category: t.Optional(t.String()),
					}),
					detail: swaggerDetail(
						"Get the latest cryptocurrencies data",
						200,
						"CryptoCurrencies",

						true,
					),
				},
			)
			.get(
				"/:slug/market_chart/range",
				async ({query, params}) =>
					detailCryptoMarketChart({
						query: queryParamsEncode(query),
						params,
					}),
				{
					query: t.Object({
						vs_currency: t.Optional(t.String({default: "usd"})),
						from: t.Optional(t.Number({default: from.getTime() / 1000})),
						to: t.Optional(t.Number({default: to.getTime() / 1000})),
						precision: t.Optional(t.Number({default: 2})),
					}),
					params: t.Object({
						slug: t.String(),
					}),
					detail: swaggerDetail(
						"Get the market chart data of a cryptocurrency",
						200,
						"CryptoCurrencyGraph",

						true,
					),
				},
			)
			.get("/:slug", async ({params}) => detailCryptoDescriptionData({params}), {
				params: t.Object({
					slug: t.String(),
				}),
				detail: swaggerDetail(
					"Get the details data of a cryptocurrency",
					200,
					"CryptoCurrency",
					true,
				),
			}),
	);
}
