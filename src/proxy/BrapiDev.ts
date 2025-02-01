import {get} from "@/helpers/HttpClient";
import type {ElysiaCustomStatusResponse} from "elysia/dist/error";
import type {Stock} from "@/types/BrapiDev/Stock";
import type {SortBy} from "@/types/BrapiDev/SortBy";
import type {SortOrder} from "@/types/BrapiDev/SortOrder";
import type {ValidRanges} from "@/types/BrapiDev/ValidRanges";
import type {ValidIntervals} from "@/types/BrapiDev/ValidIntervals";
import type {DetailedStock} from "@/types/BrapiDev/DetailedStock";
import catchErrors, {type CatchError} from "@/errors/catcher";

const BASE_API_URL = Bun.env.BRAPI_HOST;

const defaultHeaders = {
	"Accept-Encoding": "deflate, gzip",
	"referrer-policy": "origin-when-cross-origin",
	authorization: `Bearer ${Bun.env.BRAPI_KEY}`,
};

interface ListQueryParams {
	limit?: number;
	page?: number;
	sortBy?: SortBy;
	sortOrder?: SortOrder;
	search?: string;
}

interface ResponseListStocks {
	stocks: Stock[];
}

/**
 * @description Handles the request to get the stocks listing.
 *
 * @param {ListQueryParams} query - The query parameters
 * @returns {Stock[]} The list of stocks
 * @throws {ElysiaCustomStatusResponse<number, CatchError>} If the request to the external API fails
 */
export async function listStocks({
	query,
}: {query: ListQueryParams}): Promise<Stock[] | ElysiaCustomStatusResponse<number, CatchError>> {
	const limitQuery = `?limit=${query.limit}`;
	const pageQuery = `&page=${query.page}`;
	const sortByQuery = query.sortBy ? `&sortBy=${query.sortBy}` : "";
	const sortOrderQuery = query.sortOrder ? `&sortOrder=${query.sortOrder}` : "";
	const searchQuery = query.search ? `&search=${query.search}` : "";

	const url = `${BASE_API_URL}/quote/list${limitQuery}${pageQuery}${sortByQuery}${sortOrderQuery}${searchQuery}`;

	try {
		const response = await get(url, defaultHeaders);

		if (!response.ok) throw new Error();

		const jsonData: ResponseListStocks = await response.json();

		return jsonData.stocks;
	} catch (error: unknown) {
		return catchErrors({status: 500, message: "Internal Server Error", error});
	}
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

/**
 * @description Handles the request to get the stock.
 *
 * @param {DetailQueryParams} query - The query parameters
 * @param {TickerParams} params - The ticker of the stock
 * @returns {DetailedStock} The stock details
 * @throws {ElysiaCustomStatusResponse<number, CatchError>} If the request to the external API fails
 */
export async function detailStock({
	query,
	params,
}: {query: DetailQueryParams; params: TickerParams}): Promise<
	DetailedStock | ElysiaCustomStatusResponse<number, CatchError>
> {
	const rangeQuery = `?range=${query.range}`;
	const intervalQuery = `&interval=${query.interval}`;
	const modulesQuery = `&modules=${query.modules}`;
	const ticker = encodeURIComponent(params.ticker);

	const url = `${BASE_API_URL}/quote/${ticker}${rangeQuery}${intervalQuery}${modulesQuery}`;

	try {
		const response = await get(url, defaultHeaders);

		if (!response.ok) throw new Error();

		const stock: ResponseDetailStock = await response.json();

		return stock.results[0];
	} catch (error: unknown) {
		return catchErrors({status: 500, message: "Internal Server Error", error});
	}
}
