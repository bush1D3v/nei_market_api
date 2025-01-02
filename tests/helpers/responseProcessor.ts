import type Elysia from "elysia";

const BASE_URL = `${Bun.env.CLIENT_HOST}:${Bun.env.CLIENT_PORT}`;

/**
 * @param app Test Elysia Application
 * @param path The path to the API endpoint
 * @returns Returns the response from the API in JSON and raw format
 */
export default async function responseProcessor<T>(
	app: Elysia,
	path: string,
): Promise<{response: Response; json: T}> {
	const response = await app.handle(new Request(`${BASE_URL}${path}`));

	return {
		response: response,
		json: await response.json(),
	};
}
