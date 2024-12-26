import {error} from "elysia";
import {get} from "@/helpers/HttpClient";
import type {CurrencyQuotes} from "@/types/CurrencyQuotes/CurrencyQuotes";
import {ElysiaCustomStatusResponse} from "elysia/dist/error";

const BASE_API_URL = Bun.env.CURRENCYQUOTES_HOST;

/**
 * @description Handles the request to get the list of currency quotes.
 *
 * @returns {CurrencyQuotes} The list of currency quotes
 * @throws {ElysiaCustomStatusResponse<any>} If the request to the external API fails
 */
export async function listCurrencyQuotes(): Promise<
	CurrencyQuotes | ElysiaCustomStatusResponse<any>
> {
	const url = `${BASE_API_URL}/api/latest.json`;

	try {
		const response = await get(url);

		if (!response.ok) throw new Error();

		const jsonData: CurrencyQuotes = await response.json();

		return jsonData;
	} catch (err) {
		console.error(err);
		return error(500, "Internal Server Error");
	}
}
