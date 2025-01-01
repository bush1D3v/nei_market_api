import { describe, expect, it } from "bun:test";
import responseProcessor from "#/helpers/responseProcessor";
import app from "@/app";
import type { CurrencyQuotes } from "@/types/CurrencyQuotes/CurrencyQuotes";

describe("Currency Quotes Routes", () => {
    describe("GET /api/latest", () => {
        it("Return a response", async () => {
            const response = await responseProcessor(app, "/api/latest");

            expect(response).toBeInstanceOf(Object);
            expect(response).toHaveProperty("table");
            expect(response).toHaveProperty("rates");
            expect(response).toHaveProperty("lastupdate");
        });

        it("Response has correct types", async () => {
            const response: CurrencyQuotes = await responseProcessor(app, "/api/latest");

            expect(typeof response.table).toBe("string");
            expect(typeof response.rates).toBe("object");
            expect(typeof response.lastupdate).toBe("string");
        });
    });
});
