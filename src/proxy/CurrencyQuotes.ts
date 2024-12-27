import { get } from "@/helpers/HttpClient";
import type { CurrencyQuotes } from "@/types/CurrencyQuotes/CurrencyQuotes";
import type { ElysiaCustomStatusResponse } from "elysia/dist/error";
import catchErrors, { type CatchError } from "@/errors/catcher";

const BASE_API_URL = Bun.env.CURRENCYQUOTES_HOST;

/**
 * @description Handles the request to get the list of currency quotes.
 *
 * @returns {CurrencyQuotes} The list of currency quotes
 * @throws {ElysiaCustomStatusResponse<number, CatchError>} If the request to the external API fails
 */
export async function listCurrencyQuotes(): Promise<
    CurrencyQuotes | ElysiaCustomStatusResponse<number, CatchError>
> {
    const url = `${BASE_API_URL}/api/latest.json`;

    try {
        const response = await get(url);

        if (!response.ok) throw new Error();

        const jsonData: CurrencyQuotes = await response.json();

        return jsonData;
    } catch (error: unknown) {
        return catchErrors({ status: 500, message: "Internal Server Error", error });
    }
}
