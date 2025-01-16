import {describe, expect, it} from "bun:test";
import responseProcessor from "#/helpers/responseProcessor";
import app from "@/app";
import type {Stock} from "@/types/BrapiDev/Stock";
import type {DetailedStock} from "@/types/BrapiDev/DetailedStock";

describe("BrapiDev Routes", () => {
	describe("GET /quote/list", () => {
		it("Return a response", async () => {
			const {response, json} = await responseProcessor(app, "/quote/list");

			expect(response).toBeInstanceOf(Response);
			expect(response).toHaveProperty("status");
			expect(response.status).toBe(200);

			expect(json).toBeInstanceOf(Array);
			for (const item of json) {
				expect(item).toHaveProperty("stock");
				expect(item).toHaveProperty("name");
				expect(item).toHaveProperty("close");
				expect(item).toHaveProperty("change");
				expect(item).toHaveProperty("volume");
				expect(item).toHaveProperty("market_cap");
				expect(item).toHaveProperty("logo");
				expect(item).toHaveProperty("sector");
				expect(item).toHaveProperty("type");
			}
		});

		it("Response has correct types", async () => {
			const {response, json}: {response: Response; json: Stock[]} = await responseProcessor(
				app,
				"/quote/list",
			);

			expect(response).toBeInstanceOf(Response);
			expect(response).toHaveProperty("status");
			expect(response.status).toBe(200);

			expect(json).toBeInstanceOf(Array);
			for (const item of json) {
				expect(item.stock).toBeString();
				expect(item.name).toBeString();
				expect(item.close).toBeNumber();
				expect(item.change).toBeNumber();
				expect(item.volume).toBeNumber();
				expect(item.market_cap).toBeNumber();
				expect(item.logo).toBeString();
				expect(item.sector).toBeString();
				expect(item.type).toBeString();
			}
		});
	});

	describe("GET /quote/:ticker", () => {
		const ticker = "FNAM11";
		it("Return a response", async () => {
			const {response, json} = await responseProcessor(app, `/quote/${ticker}`);

			expect(response).toBeInstanceOf(Response);
			expect(response).toHaveProperty("status");
			expect(response.status).toBe(200);

			expect(json.results).toBeInstanceOf(Array);

			for (const item of json.results) {
				expect(item).toHaveProperty("currency");
				expect(item).toHaveProperty("shortName");
				expect(item).toHaveProperty("longName");
				expect(item).toHaveProperty("regularMarketChange");
				expect(item).toHaveProperty("regularMarketChangePercent");
				expect(item).toHaveProperty("regularMarketTime");
				expect(item).toHaveProperty("regularMarketPrice");
				expect(item).toHaveProperty("regularMarketDayHigh");
				expect(item).toHaveProperty("regularMarketDayRange");
				expect(item).toHaveProperty("regularMarketDayLow");
				expect(item).toHaveProperty("regularMarketVolume");
				expect(item).toHaveProperty("regularMarketPreviousClose");
				expect(item).toHaveProperty("regularMarketOpen");
				expect(item).toHaveProperty("fiftyTwoWeekRange");
				expect(item).toHaveProperty("fiftyTwoWeekLow");
				expect(item).toHaveProperty("fiftyTwoWeekHigh");
				expect(item).toHaveProperty("symbol");
				expect(item).toHaveProperty("usedInterval");
				expect(item).toHaveProperty("usedRange");
				expect(item).toHaveProperty("historicalDataPrice");
				expect(item).toHaveProperty("validRanges");
				expect(item).toHaveProperty("validIntervals");
				expect(item).toHaveProperty("priceEarnings");
				expect(item).toHaveProperty("earningsPerShare");
				expect(item).toHaveProperty("logourl");
				expect(item).toHaveProperty("earningsPerShare");
				expect(item).toHaveProperty("summaryProfile");
			}
		});

		it("Response has correct types", async () => {
			const {response, json}: {response: Response; json: {results: DetailedStock[]}} =
				await responseProcessor(app, `/quote/${ticker}`);

			expect(response).toBeInstanceOf(Response);
			expect(response).toHaveProperty("status");
			expect(response.status).toBe(200);

			expect(json.results).toBeInstanceOf(Array);
			for (const item of json.results) {
				expect(item.currency).toBeString();
				expect(item.shortName).toBeString();
				expect(item.longName).toBeString();
				expect(item.regularMarketChange).toBeNumber();
				expect(item.regularMarketChangePercent).toBeNumber();
				expect(item.regularMarketTime).toBeString();
				expect(item.regularMarketPrice).toBeNumber();
				expect(item.regularMarketDayHigh).toBeNumber();
				expect(item.regularMarketDayRange).toBeString();
				expect(item.regularMarketDayLow).toBeNumber();
				expect(item.regularMarketVolume).toBeNumber();
				expect(item.regularMarketPreviousClose).toBeNumber();
				expect(item.regularMarketOpen).toBeNumber();
				expect(item.fiftyTwoWeekRange).toBeString();
				expect(item.fiftyTwoWeekLow).toBeNumber();
				expect(item.fiftyTwoWeekHigh).toBeNumber();
				expect(item.symbol).toBeString();
				expect(item.usedInterval).toBeString();
				expect(item.usedRange).toBeString();
				expect(item.historicalDataPrice).toBeArray();
				expect(item.validRanges).toBeArray();
				expect(item.validIntervals).toBeArray();
				expect(item.priceEarnings).toBeNumber();
				expect(item.earningsPerShare).toBeNumber();
				expect(item.logourl).toBeString();
				expect(item.earningsPerShare).toBeNumber();
				expect(item.summaryProfile).toBeObject();
			}
		});
	});
});
