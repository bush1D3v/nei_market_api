import {get} from "@/helpers/HttpClient";
import type {New} from "@/types/Finnhub/New";
import type {Category} from "@/types/Finnhub/Category";
import type {ElysiaCustomStatusResponse} from "elysia/dist/error";
import catchErrors, {type CustomError, type CatchError} from "@/errors/catcher";

const BASE_API_URL = Bun.env.FINNHUB_HOST;

const defaultHeaders = {
	"X-Finnhub-Token": Bun.env.FINNHUB_KEY,
};

interface ListingsMarketNewsQueryParams {
	category?: Category;
}

/**
 * @description Handles the request to get the list of market news.
 *
 * @param {ListingsMarketNewsQueryParams} query - The query parameters
 * @returns {New[]} The list of market news
 * @throws {ElysiaCustomStatusResponse<number, CatchError>} If the request to the external API fails
 */
export async function listMarketNews({
	query,
}: {query: ListingsMarketNewsQueryParams}): Promise<
	New[] | ElysiaCustomStatusResponse<number, CatchError>
> {
	const categoryQuery = `?category=${query.category}`;
	const url = `${BASE_API_URL}/api/v1/news${categoryQuery}`;

	try {
		const response = await get(url, defaultHeaders);

		if (!response.ok) throw new Error();

		const jsonData: New[] = await response.json();

		return jsonData;
	} catch (error: unknown) {
		const err = error as CustomError;
		return catchErrors({
			status: err?.status || 500,
			message: err?.message || "Internal Server Error",
			error,
		});
	}
}

interface ListingsCompanyNewsQueryParams {
	symbol?: string;
	from?: string;
	to?: string;
}

/**
 * @description Handles the request to get the list of company news.
 *
 * @param {ListingsCompanyNewsQueryParams} query - The query parameters
 * @returns {New[]} The list of company news
 * @throws {ElysiaCustomStatusResponse<number, CatchError>} If the request to the external API fails
 */
export async function listCompanyNews({
	query,
}: {query: ListingsCompanyNewsQueryParams}): Promise<
	New[] | ElysiaCustomStatusResponse<number, CatchError>
> {
	const symbolQuery = `?symbol=${query.symbol}`;
	const fromQuery = query.from ? `&from=${query.from}` : "";
	const toQuery = query.to ? `&to=${query.to}` : "";
	const url = `${BASE_API_URL}/api/v1/company-news${symbolQuery}${fromQuery}${toQuery}`;

	try {
		const response = await get(url, defaultHeaders);

		if (!response.ok) throw new Error();

		const jsonData: New[] = await response.json();

		return jsonData;
	} catch (error: unknown) {
		const err = error as CustomError;
		return catchErrors({
			status: err?.status || 500,
			message: err?.message || "Internal Server Error",
			error,
		});
	}
}
