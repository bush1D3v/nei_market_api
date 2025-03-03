import type Elysia from "elysia";

const BASE_URL =
	import.meta.env.SERVER_AMBIENT === "development"
		? `${Bun.env.CLIENT_HOST}${Bun.env.CLIENT_PORT}`
		: Bun.env.CLIENT_HOST;

/**
 * @param app Test Elysia Application
 * @param path The path to the API endpoint
 * @returns Returns the response from the API in JSON and raw format
 */
export default async function responseProcessor<T>(
	app: Elysia,
	path: string,
	body?: T,
): Promise<{response: Response; json: T}> {
	const requestInit: RequestInit = {
		method: body ? "POST" : "GET",
		headers: {
			"Content-Type": "application/json",
		},
		body: body ? JSON.stringify(body) : undefined,
	};

	const response = await app.handle(new Request(`${BASE_URL}${path}`, requestInit));

	return {
		response: response,
		json: await response.json(),
	};
}
