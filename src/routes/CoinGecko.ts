import {Elysia, t} from "elysia";
import {
	detailCryptoMarketChart,
	detailCryptoDescriptionData,
	listCryptoCurrencies,
} from "@/proxy/CoinGecko";
import TErrorFormatter from "@/traits/TErrorFormatter";
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
						vs_currency: t.Optional(
							t.String({
								examples: ["usd", "btc", "eth"],
								default: "usd",
								minLength: 3,
								error({errors}) {
									TErrorFormatter(errors);
								},
							}),
						),
						per_page: t.Optional(
							t.Number({
								examples: [12, 20, 50, 100],
								default: 12,
								minimum: 1,
								error({errors}) {
									TErrorFormatter(errors);
								},
							}),
						),
						page: t.Optional(
							t.Number({
								examples: [1, 2, 5, 10],
								default: 1,
								minimum: 1,
								error({errors}) {
									TErrorFormatter(errors);
								},
							}),
						),
						precision: t.Optional(
							t.Number({
								examples: [0, 1, 2],
								default: 2,
								minimum: 1,
								error({errors}) {
									TErrorFormatter(errors);
								},
							}),
						),
						price_change_percentage: t.Optional(
							t.String({
								examples: ["1h", "24h", "7d", "14d", "30d", "200d", "1y"],
								error({errors}) {
									TErrorFormatter(errors);
								},
							}),
						),
						order: t.Optional(
							t.String({
								examples: [
									"market_cap_desc",
									"market_cap_asc",
									"volume_asc",
									"volume_desc",
									"id_asc",
									"id_desc",
								],
								error({errors}) {
									TErrorFormatter(errors);
								},
							}),
						),
						category: t.Optional(
							t.String({
								examples: ["aave-tokens", "ai-applications", "binance-peg-tokens"],
								error({errors}) {
									TErrorFormatter(errors);
								},
							}),
						),
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
						vs_currency: t.Optional(
							t.String({
								examples: ["usd", "btc", "eth"],
								default: "usd",
								minLength: 3,
								error({errors}) {
									TErrorFormatter(errors);
								},
							}),
						),
						from: t.Optional(
							t.Number({
								examples: [1711929600, 1712275200],
								default: from.getTime() / 1000,
								error({errors}) {
									TErrorFormatter(errors);
								},
							}),
						),
						to: t.Optional(
							t.Number({
								examples: [1711929600, 1712275200],
								default: to.getTime() / 1000,
								error({errors}) {
									TErrorFormatter(errors);
								},
							}),
						),
						precision: t.Optional(
							t.Number({
								examples: [0, 1, 2],
								default: 2,
								minimum: 1,
								error({errors}) {
									TErrorFormatter(errors);
								},
							}),
						),
					}),
					params: t.Object({
						slug: t.String({
							examples: ["bitcoin", "ethereum", "tether"],
							minLength: 3,
							error({errors}) {
								TErrorFormatter(errors);
							},
						}),
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
					slug: t.String({
						examples: ["bitcoin", "ethereum", "tether"],
						minLength: 3,
						error({errors}) {
							TErrorFormatter(errors);
						},
					}),
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
