import type {CryptoDataDescription, CryptoGraphDetail} from "@/types/CoinGecko/CryptoDetail";
import type {CryptoCurrency} from "@/types/CoinGecko/CryptoCurrency";

interface ListQueryParams {
	vs_currency?: string;
	per_page?: number;
	page?: number;
	price_change_percentage?: string;
	order?: string;
	category?: string;
	precision?: number;
}

export function listCryptoCurrencies({query}: {query: ListQueryParams}): Promise<CryptoCurrency[]> {
	return Promise.resolve([
		{
			id: "bitcoin",
			symbol: "btc",
			name: "Bitcoin",
			image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
			current_price: 1,
			market_cap: 1,
			market_cap_rank: 1,
			fully_diluted_valuation: 1,
			total_volume: 1,
			high_24h: 1,
			low_24h: 1,
			price_change_24h: 1,
			price_change_percentage_24h: 1,
			market_cap_change_24h: 1,
			market_cap_change_percentage_24h: 1,
			circulating_supply: 1,
			total_supply: 1,
			max_supply: 1,
			ath: 1,
			ath_change_percentage: 1,
			ath_date: "2021-10-10",
			atl: 1,
			atl_change_percentage: 1,
			atl_date: "2021-10-10",
			roi: null,
			last_updated: "2021-10-10",
		},
	]);
}

export function detailCryptoMarketChart({
	query,
}: {query: {id: string}}): Promise<CryptoGraphDetail> {
	return Promise.resolve({
		prices: [
			[1633833600000, 1],
			[1633837200000, 2],
			[1633840800000, 3],
			[1633844400000, 4],
			[1633848000000, 5],
		],
		market_caps: [
			[1633833600000, 1],
			[1633837200000, 2],
			[1633840800000, 3],
			[1633844400000, 4],
			[1633848000000, 5],
		],
		total_volumes: [
			[1633833600000, 1],
			[1633837200000, 2],
			[1633840800000, 3],
			[1633844400000, 4],
			[1633848000000, 5],
		],
	});
}

export function detailCryptoDescriptionData({
	query,
}: {query: {id: string}}): Promise<CryptoDataDescription> {
	return Promise.resolve({
		id: "bitcoin",
		symbol: "btc",
		name: "Bitcoin",
		web_slug: "bitcoin",
		categories: ["cryptocurrency"],
		description: {
			en: "Bitcoin (BTC) is a cryptocurrency . Users are able to generate BTC through the process of mining. Bitcoin has a current supply of 18,825,000. The last known price of Bitcoin is 1 USD and is up 1.00 over the last 24 hours. It is currently trading on 1 active market(s) with $1 traded over the last 24 hours.",
		},
		links: {
			homepage: ["https://bitcoin.org/"],
			whitepaper: "https://bitcoin.org/bitcoin.pdf",
			blockchain_site: ["https://blockchain.info/"],
			official_forum_url: ["https://blockchain.info/"],
			chat_url: ["https://blockchain.info/"],
			announcement_url: ["https://blockchain.info/"],
			subreddit_url: "bitcoin",
			repos_url: {
				github: ["bitcoin"],
			},
		},
		image: {
			thumb: "https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1547033579",
			small: "https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579",
			large: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
		},
		sentiment_votes_up_percentage: 1,
		sentiment_votes_down_percentage: 1,
		watchlist_portfolio_users: 1,
		market_cap_rank: 1,
		price_change_percentage_24h: 1,
		price_change_percentage_7d: 1,
		price_change_percentage_14d: 1,
		price_change_percentage_30d: 1,
		price_change_percentage_60d: 1,
		price_change_percentage_200d: 1,
		price_change_percentage_1y: 1,
		market_cap_change_percentage_24h: 1,
		market_data: {
			current_price: {
				usd: 1,
			},
			market_cap: {
				usd: 1,
			},
			total_volume: {
				usd: 1,
			},
			price_change_percentage_24h: 1,
			market_cap_change_percentage_24h: 1,
		},
		tickers: [
			{
				target: "btc",
				market: {
					name: "btc",
					identifier: "btc",
					has_trading_incentive: false,
					has_referral_params: false,
				},
				last: 1,
				volume: 1,
				converted_last: {
					btc: 1,
					eth: 1,
					usd: 1,
				},
				converted_volume: {
					btc: 1,
					eth: 1,
					usd: 1,
				},
				trust_score: "green",
				bid_ask_spread_percentage: 1,
				timestamp: "string",
				last_traded_at: "string",
				last_fetch_at: "string",
				is_anomaly: true,
				is_stale: true,
				trade_url: "string",
				token_info_url: null,
				coin_id: "string",
				target_coin_id: "string",
			},
		],
	});
}
