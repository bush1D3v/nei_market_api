import type {Stock} from "@/types/BrapiDev/Stock";
import type {SortBy} from "@/types/BrapiDev/SortBy";
import type {SortOrder} from "@/types/BrapiDev/SortOrder";
import type {ValidRanges} from "@/types/BrapiDev/ValidRanges";
import type {ValidIntervals} from "@/types/BrapiDev/ValidIntervals";
import type {DetailedStock} from "@/types/BrapiDev/DetailedStock";

interface ListQueryParams {
	limit?: number;
	page?: number;
	sortBy?: SortBy;
	sortOrder?: SortOrder;
}

export function listStocks({query}: {query: ListQueryParams}): Promise<Stock[]> {
	return Promise.resolve([
		{
			stock: "AAPL",
			name: "Apple Inc.",
			close: 150.0,
			change: 1.0,
			volume: 1000000,
			market_cap: 2000000000,
			logo: "https://logo.com",
			sector: "Technology",
			type: "Stock",
		},
		{
			stock: "GOOGL",
			name: "Alphabet Inc.",
			close: 2000.0,
			change: 10.0,
			volume: 2000000,
			market_cap: 3000000000,
			logo: "https://logo.com",
			sector: "Technology",
			type: "Stock",
		},
		{
			stock: "AMZN",
			name: "Amazon.com Inc.",
			close: 3000.0,
			change: 20.0,
			volume: 3000000,
			market_cap: 4000000000,
			logo: "https://logo.com",
			sector: "Technology",
			type: "Stock",
		},
	]);
}

interface DetailQueryParams {
	range?: ValidRanges;
	interval?: ValidIntervals;
	modules?: string;
}

interface TickerParams {
	ticker: string;
}

interface ResponseDetailStock {
	results: DetailedStock[];
}

export function detailStock({
	query,
	params,
}: {query: DetailQueryParams; params: TickerParams}): Promise<ResponseDetailStock> {
	return Promise.resolve({
		results: [
			{
				currency: "BRL",
				shortName: "FINAM       CI *",
				longName: "Fundo de Investimento Amazônia - FINAM",
				regularMarketChange: -0.03,
				regularMarketChangePercent: -9.375,
				regularMarketTime: "2024-12-27T21:17:54.000Z",
				regularMarketPrice: 0.29,
				regularMarketDayHigh: 0.32,
				regularMarketDayRange: "0.29 - 0.32",
				regularMarketDayLow: 0.29,
				regularMarketVolume: 1360107000,
				regularMarketPreviousClose: 0.32,
				regularMarketOpen: 0.36,
				fiftyTwoWeekRange: "0 - 0.32",
				fiftyTwoWeekLow: 0,
				fiftyTwoWeekHigh: 0.32,
				symbol: "FNAM11",
				usedInterval: "1d",
				usedRange: "1mo",
				historicalDataPrice: [
					{
						date: 1732712400,
						open: 0.0003,
						high: 0.0003,
						low: 0.0003,
						close: 0.0003,
						volume: 0,
						adjustedClose: 0.0003,
					},
					{
						date: 1732798800,
						open: 0.0003,
						high: 0.0004,
						low: 0.0003,
						close: 0.0003,
						volume: 0,
						adjustedClose: 0.0003,
					},
				],
				validRanges: [
					"1d",
					"2d",
					"5d",
					"7d",
					"1mo",
					"3mo",
					"6mo",
					"1y",
					"2y",
					"5y",
					"10y",
					"ytd",
					"max",
				],
				validIntervals: [
					"1m",
					"2m",
					"5m",
					"15m",
					"30m",
					"60m",
					"90m",
					"1h",
					"1d",
					"5d",
					"1wk",
					"1mo",
					"3mo",
				],
				priceEarnings: 100,
				logourl: "https://s3-symbol-logo.tradingview.com/amazonia-on-es--big.svg",
				earningsPerShare: 10,
				summaryProfile: {
					address1: "Av. Brigadeiro Faria Lima, 3729, 10º andar",
					city: "São Paulo",
					state: "SP",
					zip: "04538-133",
					country: "Brazil",
					phone: "55 11 3048 0000",
					website: "http://www.bradescori.com.br",
					industry: "Asset Management",
					industryKey: "asset_management",
					industryDisp: "Asset Management",
				},
			},
		],
	});
}
