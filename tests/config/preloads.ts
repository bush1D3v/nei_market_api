import { mock } from "bun:test";
import { listCurrencyQuotes } from "#/mocks/proxy/CurrencyQuotes";
import { listMarketNews, listCompanyNews } from "#/mocks/proxy/Finnhub";

mock.module("@/proxy/CurrencyQuotes.ts", () => {
    return {
        listCurrencyQuotes,
    };
});

mock.module("@/proxy/Finnhub.ts", () => {
    return {
        listMarketNews,
        listCompanyNews,
    };
});
