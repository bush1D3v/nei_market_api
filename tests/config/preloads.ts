import { mock } from "bun:test";
import listCurrencyQuotes from "#/mocks/proxy/CurrencyQuotes"

mock.module("@/proxy/CurrencyQuotes.ts", () => {
    return {
        listCurrencyQuotes
    }
});
