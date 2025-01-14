import {describe, expect, it} from "bun:test";
import responseProcessor from "#/helpers/responseProcessor";
import app from "@/app";
import type {CurrencyQuotes} from "@/types/CurrencyQuotes/CurrencyQuotes";

describe("Currency Quotes Routes", () => {
	describe("GET /api/latest", () => {
		it("Return a response", async () => {
			const {response, json} = await responseProcessor(app, "/api/latest");

			expect(response).toBeInstanceOf(Response);
			expect(response).toHaveProperty("status");
			expect(response.status).toBe(200);

			expect(json).toBeInstanceOf(Object);
			expect(json).toHaveProperty("table");
			expect(json).toHaveProperty("rates");
			expect(json).toHaveProperty("lastupdate");
		});

		it("Response has correct types", async () => {
			const {response, json}: {response: Response; json: CurrencyQuotes} =
				await responseProcessor(app, "/api/latest");

			expect(response).toBeInstanceOf(Response);
			expect(response).toHaveProperty("status");
			expect(response.status).toBe(200);

			expect(json).toBeInstanceOf(Object);
			expect(typeof json.table).toBe("string");
			expect(typeof json.rates).toBe("object");
			expect(typeof json.lastupdate).toBe("string");
		});
	});
});
