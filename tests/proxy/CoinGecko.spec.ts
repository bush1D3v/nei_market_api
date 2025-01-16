import {describe, expect, it} from "bun:test";
import responseProcessor from "#/helpers/responseProcessor";
import app from "@/app";
import type {CryptoDataDescription, CryptoGraphDetail} from "@/types/CoinGecko/CryptoDetail";
import type {CryptoCurrency} from "@/types/CoinGecko/CryptoCurrency";

describe("CoinGecko Routes", () => {
	describe("GET /coins/markets", () => {
		it("Return a response", async () => {
			const {response, json} = await responseProcessor(app, "/coins/markets");

			expect(response).toBeInstanceOf(Response);
			expect(response).toHaveProperty("status");
			expect(response.status).toBe(200);

			expect(json).toBeInstanceOf(Array);
			for (const item of json) {
				expect(item).toHaveProperty("id");
				expect(item).toHaveProperty("symbol");
				expect(item).toHaveProperty("name");
				expect(item).toHaveProperty("image");
				expect(item).toHaveProperty("current_price");
				expect(item).toHaveProperty("market_cap");
				expect(item).toHaveProperty("market_cap_rank");
				expect(item).toHaveProperty("fully_diluted_valuation");
				expect(item).toHaveProperty("total_volume");
				expect(item).toHaveProperty("high_24h");
				expect(item).toHaveProperty("low_24h");
				expect(item).toHaveProperty("price_change_24h");
				expect(item).toHaveProperty("price_change_percentage_24h");
				expect(item).toHaveProperty("market_cap_change_24h");
				expect(item).toHaveProperty("market_cap_change_percentage_24h");
				expect(item).toHaveProperty("circulating_supply");
				expect(item).toHaveProperty("total_supply");
				expect(item).toHaveProperty("max_supply");
				expect(item).toHaveProperty("ath");
				expect(item).toHaveProperty("ath_change_percentage");
				expect(item).toHaveProperty("ath_date");
				expect(item).toHaveProperty("atl");
				expect(item).toHaveProperty("atl_change_percentage");
				expect(item).toHaveProperty("atl_date");
				expect(item).toHaveProperty("roi");
				expect(item).toHaveProperty("last_updated");
			}
		});

		it("Response has correct types", async () => {
			const {response, json}: {response: Response; json: CryptoCurrency[]} =
				await responseProcessor(app, "/coins/markets");

			expect(response).toBeInstanceOf(Response);
			expect(response).toHaveProperty("status");
			expect(response.status).toBe(200);

			expect(json).toBeInstanceOf(Array);
			for (const item of json) {
				expect(item.id).toBeString();
				expect(item.symbol).toBeString();
				expect(item.name).toBeString();
				expect(item.image).toBeString();
				expect(item.current_price).toBeNumber();
				expect(item.market_cap).toBeNumber();
				expect(item.market_cap_rank).toBeNumber();
				expect(item.fully_diluted_valuation).toBeNumber();
				expect(item.total_volume).toBeNumber();
				expect(item.high_24h).toBeNumber();
				expect(item.low_24h).toBeNumber();
				expect(item.price_change_24h).toBeNumber();
				expect(item.price_change_percentage_24h).toBeNumber();
				expect(item.market_cap_change_24h).toBeNumber();
				expect(item.market_cap_change_percentage_24h).toBeNumber();
				expect(item.circulating_supply).toBeNumber();
				expect(item.total_supply).toBeNumber();
				expect(item.max_supply).toBeNumber();
				expect(item.ath).toBeNumber();
				expect(item.ath_change_percentage).toBeNumber();
				expect(item.ath_date).toBeString();
				expect(item.atl).toBeNumber();
				expect(item.atl_change_percentage).toBeNumber();
				expect(item.atl_date).toBeString();
				expect(item.roi).toBeNull();
				expect(item.last_updated).toBeString();
			}
		});
	});

	describe("GET /coins/:slug/market_chart/range", () => {
		const slug = "bitcoin";
		it("Return a response", async () => {
			const {response, json} = await responseProcessor(
				app,
				`/coins/${slug}/market_chart/range`,
			);

			expect(response).toBeInstanceOf(Response);
			expect(response).toHaveProperty("status");
			expect(response.status).toBe(200);

			expect(json).toBeInstanceOf(Object);
			expect(json).toHaveProperty("prices");
			expect(json).toHaveProperty("market_caps");
			expect(json).toHaveProperty("total_volumes");
		});

		it("Response has correct types", async () => {
			const {response, json}: {response: Response; json: CryptoGraphDetail} =
				await responseProcessor(app, `/coins/${slug}/market_chart/range`);

			expect(response).toBeInstanceOf(Response);
			expect(response).toHaveProperty("status");
			expect(response.status).toBe(200);

			expect(json).toBeInstanceOf(Object);
			expect(json.prices).toBeInstanceOf(Array);
			expect(json.market_caps).toBeInstanceOf(Array);
			expect(json.total_volumes).toBeInstanceOf(Array);
		});
	});

	describe("GET /coins/:slug", () => {
		const slug = "bitcoin";
		it("Return a response", async () => {
			const {response, json} = await responseProcessor(app, `/coins/${slug}`);

			expect(response).toBeInstanceOf(Response);
			expect(response).toHaveProperty("status");
			expect(response.status).toBe(200);

			expect(json).toBeInstanceOf(Object);
			expect(json).toHaveProperty("id");
			expect(json).toHaveProperty("symbol");
			expect(json).toHaveProperty("name");
			expect(json).toHaveProperty("web_slug");
			expect(json).toHaveProperty("categories");
			expect(json).toHaveProperty("description");
			expect(json).toHaveProperty("links");
			expect(json).toHaveProperty("image");
			expect(json).toHaveProperty("sentiment_votes_up_percentage");
			expect(json).toHaveProperty("sentiment_votes_down_percentage");
			expect(json).toHaveProperty("watchlist_portfolio_users");
			expect(json).toHaveProperty("market_cap_rank");
			expect(json).toHaveProperty("price_change_percentage_24h");
			expect(json).toHaveProperty("price_change_percentage_7d");
			expect(json).toHaveProperty("price_change_percentage_14d");
			expect(json).toHaveProperty("price_change_percentage_30d");
			expect(json).toHaveProperty("price_change_percentage_60d");
			expect(json).toHaveProperty("price_change_percentage_200d");
			expect(json).toHaveProperty("price_change_percentage_1y");
			expect(json).toHaveProperty("market_cap_change_percentage_24h");
			expect(json).toHaveProperty("market_data");
			expect(json).toHaveProperty("tickers");
		});

		it("Response has correct types", async () => {
			const {response, json}: {response: Response; json: CryptoDataDescription} =
				await responseProcessor(app, `/coins/${slug}`);

			expect(response).toBeInstanceOf(Response);
			expect(response).toHaveProperty("status");
			expect(response.status).toBe(200);

			expect(json).toBeInstanceOf(Object);
			expect(json.id).toBeString();
			expect(json.symbol).toBeString();
			expect(json.name).toBeString();
			expect(json.web_slug).toBeString();
			expect(json.categories).toBeInstanceOf(Array);
			expect(json.description).toBeInstanceOf(Object);
			expect(json.links).toBeInstanceOf(Object);
			expect(json.image).toBeInstanceOf(Object);
			expect(json.sentiment_votes_up_percentage).toBeNumber();
			expect(json.sentiment_votes_down_percentage).toBeNumber();
			expect(json.watchlist_portfolio_users).toBeNumber();
			expect(json.market_cap_rank).toBeNumber();
			expect(json.price_change_percentage_24h).toBeNumber();
			expect(json.price_change_percentage_7d).toBeNumber();
			expect(json.price_change_percentage_14d).toBeNumber();
			expect(json.price_change_percentage_30d).toBeNumber();
			expect(json.price_change_percentage_60d).toBeNumber();
			expect(json.price_change_percentage_200d).toBeNumber();
			expect(json.price_change_percentage_1y).toBeNumber();
			expect(json.market_cap_change_percentage_24h).toBeNumber();
			expect(json.market_data).toBeInstanceOf(Object);
			expect(json.tickers).toBeInstanceOf(Array);
		});
	});
});
