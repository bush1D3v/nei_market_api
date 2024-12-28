import {describe, expect, it} from "bun:test";
import app from "@/app";
import type {CurrencyQuotes} from "@/types/CurrencyQuotes/CurrencyQuotes";

describe("Currency Quotes Routes", () => {
	describe("GET /api/latest", () => {
		it("return a response", async () => {
			const response = await app
				.handle(new Request("http://localhost:3000/api/latest"))
				.then(async (res) => res.json());

			expect(response).toBeInstanceOf(Object);
			expect(response).toHaveProperty("table");
			expect(response).toHaveProperty("rates");
			expect(response).toHaveProperty("lastupdate");
		});

		it("response has correct types", async () => {
			const response: CurrencyQuotes = await app
				.handle(new Request("http://localhost:3000/api/latest"))
				.then(async (res) => res.json());

			expect(typeof response.table).toBe("string");
			expect(typeof response.rates).toBe("object");
			expect(typeof response.lastupdate).toBe("string");
		});
	});
});
