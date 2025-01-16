import {mock} from "bun:test";
import {listCurrencyQuotes} from "#/mocks/proxy/CurrencyQuotes";
import {generateContent} from "#/mocks/proxy/Gemini";
import {detailStock, listStocks} from "#/mocks/proxy/BrapiDev";
import {listMarketNews, listCompanyNews} from "#/mocks/proxy/Finnhub";
import {
	listCryptoCurrencies,
	detailCryptoMarketChart,
	detailCryptoDescriptionData,
} from "#/mocks/proxy/CoinGecko";

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

mock.module("@/proxy/BrapiDev.ts", () => {
	return {
		detailStock,
		listStocks,
	};
});

mock.module("@/proxy/CoinGecko.ts", () => {
	return {
		listCryptoCurrencies,
		detailCryptoMarketChart,
		detailCryptoDescriptionData,
	};
});

mock.module("@/proxy/Gemini.ts", () => {
	return {
		generateContent,
	};
});
