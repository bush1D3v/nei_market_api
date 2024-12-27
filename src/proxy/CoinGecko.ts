import { get } from "@/helpers/HttpClient";
import type { ElysiaCustomStatusResponse } from "elysia/dist/error";
import type { CryptoDataDescription, CryptoGraphDetail } from "@/types/CoinGecko/CryptoDetail";
import type { CryptoCurrency } from "@/types/CoinGecko/CryptoCurrency";
import catchErrors, { type CatchError } from "@/errors/catcher";

const BASE_API_URL = Bun.env.COINGECKO_HOST;
const API_KEY = Bun.env.COINGECKO_KEY;

const defaultHeaders = {
    "Accept-Encoding": "deflate, gzip",
    "referrer-policy": "origin-when-cross-origin",
    X_CG_DEMO_API_KEY: API_KEY,
};

interface ListQueryParams {
    vs_currency?: string;
    per_page?: number;
    page?: number;
    price_change_percentage?: string;
    order?: string;
    category?: string;
    precision?: number;
}

/**
 * @description Handles the request to get the cryptocurrency.
 *
 * @param {ListQueryParams} query - The query parameters
 * @returns {CryptoCurrency[]} The list of cryptocurrencies
 * @throws {ElysiaCustomStatusResponse<number, CatchError>} If the request to the external API fails
 */
export async function listCryptoCurrencies({
    query,
}: { query: ListQueryParams }): Promise<CryptoCurrency[] | ElysiaCustomStatusResponse<number, CatchError>> {
    const vsCurrencyQuery = `?vs_currency=${query.vs_currency as string}`;
    const perPageQuery = `&per_page=${query.per_page as number}`;
    const pageQuery = `&page=${query.page as number}`;
    const precisionQuery = `&precision=${query.precision as number}`;
    const priceChangePercentageQuery = query.price_change_percentage
        ? `&price_change_percentage=${query.price_change_percentage}`
        : "";
    const orderQuery = query.order ? `&order=${query.order}` : "";
    const categoryQuery = query.category ? `&category=${query.category}` : "";

    const url = `${BASE_API_URL}/coins/markets${vsCurrencyQuery}${perPageQuery}${pageQuery}${precisionQuery}${priceChangePercentageQuery}${orderQuery}${categoryQuery}`;

    try {
        const response = await get(url, defaultHeaders);

        if (!response.ok) throw new Error();

        const cryptos: CryptoCurrency[] = await response.json();

        return cryptos;
    } catch (error: unknown) {
        return catchErrors({ status: 500, message: "Internal Server Error", error });
    }
}

interface DetailQueryParams {
    vs_currency?: string;
    from?: number;
    to?: number;
    precision?: number;
}

interface SlugParams {
    slug: string;
}

/**
 * @description Handles the request to get the cryptocurrency.
 *
 * @param {DetailQueryParams} query - The query parameters
 * @param {SlugParams} params - The slug of the cryptocurrency
 * @returns {CryptoGraphDetail} The cryptocurrency graph detail
 * @throws {ElysiaCustomStatusResponse<number, CatchError>} If the request to the external API fails
 */
export async function detailCryptoMarketChart({
    query,
    params,
}: { query: DetailQueryParams; params: SlugParams }): Promise<
    CryptoGraphDetail | ElysiaCustomStatusResponse<number, CatchError>
> {
    const vsCurrencyQuery = `?vs_currency=${query.vs_currency}`;
    const fromQuery = `&from=${query.from}`;
    const toQuery = `&to=${query.to}`;
    const precisionQuery = `&precision=${query.precision}`;

    const slug = encodeURIComponent(params.slug);

    const url = `${BASE_API_URL}/coins/${slug}/market_chart/range${vsCurrencyQuery}${fromQuery}${toQuery}${precisionQuery}`;

    console.log(url);

    try {
        const response = await get(url, defaultHeaders);

        if (!response.ok) throw new Error();

        const jsonData: CryptoGraphDetail = await response.json();

        return jsonData;
    } catch (error: unknown) {
        return catchErrors({ status: 500, message: "Internal Server Error", error });
    }
}

/**
 * @description Handles the request to get the cryptocurrency.
 *
 * @param {SlugParams} params - The slug of the cryptocurrency
 * @returns {CryptoDataDescription} The cryptocurrency description
 * @throws {ElysiaCustomStatusResponse<number, CatchError>} If the request to the external API fails
 */
export async function detailCryptoDescriptionData({
    params,
}: { params: SlugParams }): Promise<CryptoDataDescription | ElysiaCustomStatusResponse<number, CatchError>> {
    const slug = encodeURIComponent(params.slug);

    const url = `${BASE_API_URL}/coins/${slug}`;

    try {
        const response = await get(url, defaultHeaders);

        if (!response.ok) throw new Error();

        const jsonData: CryptoDataDescription = await response.json();

        return jsonData;
    } catch (error: unknown) {
        return catchErrors({ status: 500, message: "Internal Server Error", error });
    }
}
