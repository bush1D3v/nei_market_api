import type {ElysiaSwaggerConfig} from "@elysiajs/swagger";

export const swaggerConfig: ElysiaSwaggerConfig = {
	version: "1.0.0",
	documentation: {
		openapi: "3.1.0",
		tags: [
			{
				name: "CoinGecko",
				description: "CoinGecko API (Cryptocurrencies)",
			},
			{
				name: "BrapiDev",
				description: "BrapiDev API (Stocks)",
			},
			{
				name: "Finnhub",
				description: "Finnhub API (News)",
			},
			{
				name: "CurrencyQuotes",
				description: "Quotes API (Forex)",
			},
			{
				name: "GenerativeAI",
				description: "Gemini API (AI Chatbot)",
			},
		],
		info: {
			title: "NEI Market Analytics API Documentation",
			version: "1.0.0",
			contact: {
				name: "Victor José Lopes Navarro",
				email: "victor.jose.lopes.navarro@gmail.com",
				url: "https://bush1d3v-portfolio.vercel.app/",
			},
			license: {
				name: "MIT",
				url: "https://opensource.org/licenses/MIT",
			},
			description:
				"NEI Market Analytics is an open-source project designed to provide comprehensive market value analyses for various financial instruments and digital assets. This repository aims to create a robust platform for tracking and analyzing market trends across multiple sectors.",
			termsOfService: "https://opensource.org/licenses/MIT",
		},
		servers: [
			{
				url: "http://localhost:3000",
				description: "Local Server",
			},
		],
		components: {
			schemas: {
				OK: {
					type: "object",
					properties: {
						message: {
							type: "string",
							example: "OK",
						},
					},
				},
				CatchError: {
					type: "object",
					properties: {
						status: {
							type: "integer",
							example: 500,
							description: "The status code of the error",
						},
						message: {
							type: "string",
							example: "Personalized message - Internal Server Error",
							description: "The personalized error message + status text",
						},
						error: {
							type: "string",
							example: "Traceback (most recent call last): ...",
							description: "The error caused by the request",
						},
					},
				},
				CurrencyQuotes: {
					type: "object",
					properties: {
						table: {
							type: "string",
							example: "latest",
						},
						rate: {
							type: "object",
							example: {USD: 1.0, EUR: 0.85, JPY: 110.0},
						},
						lastupdate: {
							type: "string",
							example: "2024-12-27T22:47:30.755000+00:00",
						},
					},
				},
				News: {
					type: "object",
					properties: {
						category: {
							type: "string",
							example: "crypto",
						},
						datetime: {
							type: "integer",
							example: 1735335000,
						},
						headline: {
							type: "string",
							example: "Crypto Biz: The Year of Bitcoin",
						},
						id: {
							type: "integer",
							example: 7437170,
						},
						image: {
							type: "string",
							example:
								"https://static2.finnhub.io/file/publicdatany/hmpimage/cointelegraph.webp",
						},
						related: {
							type: "string",
							example: "",
						},
						source: {
							type: "string",
							example: "Cointelegraph",
						},
						summary: {
							type: "string",
							example:
								"This week’s Crypto Biz explores Bitcoin’s landmark year, Crypto.com’s new custody service, Russia’s partial ban on crypto mining and taxes on staking rewards in the US.",
						},
						url: {
							type: "string",
							example:
								"https://cointelegraph.com/news/crypto-biz-the-year-of-bitcoin?utm_source=rss_feed&utm_medium=rss&utm_campaign=rss_partner_inbound",
						},
					},
				},
				CryptoCurrencies: {
					type: "object",
					properties: {
						id: {
							type: "string",
							example: "bitcoin",
						},
						symbol: {
							type: "string",
							example: "btc",
						},
						name: {
							type: "string",
							example: "Bitcoin",
						},
						image: {
							type: "string",
							example:
								"https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
						},
						current_price: {
							type: "number",
							example: 94209.87,
						},
						market_cap: {
							type: "number",
							example: 1865235418262,
						},
						market_cap_rank: {
							type: "integer",
							example: 1,
						},
						fully_diluted_valuation: {
							type: "number",
							example: 1978072391367,
						},
						total_volume: {
							type: "number",
							example: 52905765837,
						},
						high_24h: {
							type: "number",
							example: 97134,
						},
						low_24h: {
							type: "number",
							example: 93369,
						},
						price_change_24h: {
							type: "number",
							example: -1322.5665068187518,
						},
						price_change_percentage_24h: {
							type: "number",
							example: -1.38442,
						},
						market_cap_change_24h: {
							type: "number",
							example: -25273494847.84839,
						},
						market_cap_change_percentage_24h: {
							type: "number",
							example: -1.33686,
						},
						circulating_supply: {
							type: "number",
							example: 19802078,
						},
						total_supply: {
							type: "number",
							example: 21000000,
						},
						max_supply: {
							type: "number",
							example: 21000000,
						},
						ath: {
							type: "number",
							example: 108135,
						},
						ath_change_percentage: {
							type: "number",
							example: -12.76843,
						},
						ath_date: {
							type: "string",
							example: "2024-12-17T15:02:41.429Z",
						},
						atl: {
							type: "number",
							example: 67.81,
						},
						atl_change_percentage: {
							type: "number",
							example: 139007.79259,
						},
						atl_date: {
							type: "string",
							example: "2013-07-06T00:00:00.000Z",
						},
						roi: {
							type: "object",
							example: null,
						},
						last_updated: {
							type: "string",
							example: "2024-12-28T00:39:06.484Z",
						},
					},
				},
				CryptoCurrency: {
					type: "object",
					properties: {
						id: {
							type: "string",
							example: "bitcoin",
						},
						symbol: {
							type: "string",
							example: "btc",
						},
						name: {
							type: "string",
							example: "Bitcoin",
						},
						web_slug: {
							type: "string",
							example: "bitcoin",
						},
						categories: {
							type: "array",
							items: {
								type: "string",
							},
							example: ["Cryptocurrency"],
						},
						description: {
							type: "object",
							properties: {
								en: {
									type: "string",
									example: "Bitcoin is a decentralized digital currency.",
								},
							},
						},
						links: {
							type: "object",
							properties: {
								homepage: {
									type: "array",
									items: {
										type: "string",
									},
									example: ["https://bitcoin.org"],
								},
								whitepaper: {
									type: "string",
									example: "https://bitcoin.org/bitcoin.pdf",
								},
								blockchain_site: {
									type: "array",
									items: {
										type: "string",
									},
									example: ["https://blockchain.info"],
								},
								official_forum_url: {
									type: "array",
									items: {
										type: "string",
									},
									example: ["https://bitcointalk.org"],
								},
								chat_url: {
									type: "array",
									items: {
										type: "string",
									},
									example: ["https://t.me/bitcoin"],
								},
								announcement_url: {
									type: "array",
									items: {
										type: "string",
									},
									example: ["https://bitcointalk.org"],
								},
								subreddit_url: {
									type: "string",
									example: "https://reddit.com/r/bitcoin",
								},
								repos_url: {
									type: "object",
									properties: {
										github: {
											type: "array",
											items: {
												type: "string",
											},
											example: ["https://github.com/bitcoin/bitcoin"],
										},
									},
								},
							},
						},
						image: {
							type: "object",
							properties: {
								thumb: {
									type: "string",
									example:
										"https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png",
								},
								small: {
									type: "string",
									example:
										"https://assets.coingecko.com/coins/images/1/small/bitcoin.png",
								},
								large: {
									type: "string",
									example:
										"https://assets.coingecko.com/coins/images/1/large/bitcoin.png",
								},
							},
						},
						sentiment_votes_up_percentage: {
							type: "number",
							example: 80.5,
						},
						sentiment_votes_down_percentage: {
							type: "number",
							example: 19.5,
						},
						watchlist_portfolio_users: {
							type: "number",
							example: 1500000,
						},
						market_cap_rank: {
							type: "number",
							example: 1,
						},
						price_change_percentage_24h: {
							type: "number",
							example: -1.5,
						},
						price_change_percentage_7d: {
							type: "number",
							example: 2.5,
						},
						price_change_percentage_14d: {
							type: "number",
							example: 5.0,
						},
						price_change_percentage_30d: {
							type: "number",
							example: 10.0,
						},
						price_change_percentage_60d: {
							type: "number",
							example: 15.0,
						},
						price_change_percentage_200d: {
							type: "number",
							example: 20.0,
						},
						price_change_percentage_1y: {
							type: "number",
							example: 25.0,
						},
						market_cap_change_percentage_24h: {
							type: "number",
							example: -1.0,
						},
						market_data: {
							type: "object",
							properties: {
								current_price: {
									type: "object",
									properties: {
										usd: {
											type: "number",
											example: 50000,
										},
									},
								},
								market_cap: {
									type: "object",
									properties: {
										usd: {
											type: "number",
											example: 1000000000,
										},
									},
								},
								total_volume: {
									type: "object",
									properties: {
										usd: {
											type: "number",
											example: 50000000,
										},
									},
								},
								price_change_percentage_24h: {
									type: "number",
									example: -1.5,
								},
								market_cap_change_percentage_24h: {
									type: "number",
									example: -1.0,
								},
							},
						},
						tickers: {
							type: "array",
							items: {
								type: "object",
								properties: {
									target: {
										type: "string",
										example: "USD",
									},
									market: {
										type: "object",
										properties: {
											name: {
												type: "string",
												example: "Binance",
											},
											identifier: {
												type: "string",
												example: "binance",
											},
											has_trading_incentive: {
												type: "boolean",
												example: false,
											},
											has_referral_params: {
												type: "boolean",
												example: false,
											},
										},
									},
									last: {
										type: "number",
										example: 50000,
									},
									volume: {
										type: "number",
										example: 1000,
									},
									converted_last: {
										type: "object",
										properties: {
											btc: {
												type: "number",
												example: 1,
											},
											eth: {
												type: "number",
												example: 20,
											},
											usd: {
												type: "number",
												example: 50000,
											},
										},
									},
									converted_volume: {
										type: "object",
										properties: {
											btc: {
												type: "number",
												example: 10,
											},
											eth: {
												type: "number",
												example: 200,
											},
											usd: {
												type: "number",
												example: 500000,
											},
										},
									},
									trust_score: {
										type: "string",
										example: "green",
									},
									bid_ask_spread_percentage: {
										type: "number",
										example: 0.1,
									},
									timestamp: {
										type: "string",
										example: "2024-12-28T00:39:06.484Z",
									},
									last_traded_at: {
										type: "string",
										example: "2024-12-28T00:39:06.484Z",
									},
									last_fetch_at: {
										type: "string",
										example: "2024-12-28T00:39:06.484Z",
									},
									is_anomaly: {
										type: "boolean",
										example: false,
									},
									is_stale: {
										type: "boolean",
										example: false,
									},
									trade_url: {
										type: "string",
										example: "https://binance.com/trade/BTC_USD",
									},
									token_info_url: {
										type: "string",
										example: null,
									},
									coin_id: {
										type: "string",
										example: "bitcoin",
									},
									target_coin_id: {
										type: "string",
										example: "usd",
									},
								},
							},
						},
					},
				},
				CryptoCurrencyGraph: {
					type: "object",
					properties: {
						prices: {
							type: "array",
							items: {
								type: "number",
								example: [1711930196348, 1865235418262],
								description: "Value 1: Date - Value 2: Price",
							},
						},
						market_caps: {
							type: "array",
							items: {
								type: "number",
								example: [1711930196348, 1865235418262],
								description: "Value 1: Date - Value 2: Market Cap",
							},
						},
						total_volumes: {
							type: "array",
							items: {
								type: "number",
								example: [1711930196348, 1865235418262],
								description: "Value 1: Date - Value 2: Total Volume",
							},
						},
					},
				},
				Stocks: {
					type: "object",
					properties: {
						stock: {
							type: "string",
							example: "FNAM11",
						},
						name: {
							type: "string",
							example: "FINAM CI *",
						},
						close: {
							type: "number",
							example: 0.29,
						},
						change: {
							type: "number",
							example: -9.375000000000009,
						},
						volume: {
							type: "number",
							example: 1360107000,
						},
						market_cap: {
							type: "number",
							example: null,
						},
						logo: {
							type: "string",
							example:
								"https://s3-symbol-logo.tradingview.com/amazonia-on-es--big.svg",
						},
						sector: {
							type: "string",
							example: null,
						},
						type: {
							type: "string",
							example: "fund",
						},
					},
				},
				Stock: {
					type: "object",
					properties: {
						currency: {
							type: "string",
							example: "BRL",
						},
						shortName: {
							type: "string",
							example: "FINAM CI *",
						},
						longName: {
							type: "string",
							example: "Fundo de Investimento Amazônia - FINAM",
						},
						regularMarketChange: {
							type: "number",
							example: -0.03,
						},
						regularMarketChangePercent: {
							type: "number",
							example: -9.375,
						},
						regularMarketTime: {
							type: "string",
							example: "2024-12-27T21:17:54.000Z",
						},
						regularMarketPrice: {
							type: "number",
							example: 0.29,
						},
						regularMarketDayHigh: {
							type: "number",
							example: 0.32,
						},
						regularMarketDayRange: {
							type: "string",
							example: "0.29 - 0.32",
						},
						regularMarketDayLow: {
							type: "number",
							example: 0.29,
						},
						regularMarketVolume: {
							type: "number",
							example: 1360107000,
						},
						regularMarketPreviousClose: {
							type: "number",
							example: 0.32,
						},
						regularMarketOpen: {
							type: "number",
							example: 0.36,
						},
						fiftyTwoWeekRange: {
							type: "string",
							example: "0 - 0.32",
						},
						fiftyTwoWeekLow: {
							type: "number",
							example: 0,
						},
						fiftyTwoWeekHigh: {
							type: "number",
							example: 0.32,
						},
						usedInterval: {
							type: "string",
							example: "1d",
						},
						usedRange: {
							type: "string",
							example: "1mo",
						},
						historicalDataPrice: {
							type: "array",
							items: {
								type: "object",
								properties: {
									date: {
										type: "integer",
										example: 1732712400,
									},
									open: {
										type: "number",
										example: 0.0003,
									},
									high: {
										type: "number",
										example: 0.0003,
									},
									low: {
										type: "number",
										example: 0.0003,
									},
									close: {
										type: "number",
										example: 0.0003,
									},
									volume: {
										type: "number",
										example: 0,
									},
									adjustedClose: {
										type: "number",
										example: 0.0003,
									},
								},
							},
						},
						validRanges: {
							type: "array",
							items: {
								type: "string",
							},
							example: ["1d", "1mo", "1y", "ytd", "max"],
						},
						validIntervals: {
							type: "array",
							items: {
								type: "string",
							},
							example: ["1m", "1h", "1d", "5d", "1wk", "1mo"],
						},
						priceEarnings: {
							type: "number",
							example: null,
						},
						earningsPerShare: {
							type: "number",
							example: null,
						},
						logourl: {
							type: "string",
							example:
								"https://s3-symbol-logo.tradingview.com/amazonia-on-es--big.svg",
						},
					},
				},
			},
		},
	},
	autoDarkMode: true,
	theme: {
		dark: "darkly",
		light: "flatly",
	},
};
