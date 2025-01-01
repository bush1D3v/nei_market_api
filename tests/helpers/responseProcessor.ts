import type Elysia from "elysia";

const BASE_URL = `${Bun.env.CLIENT_HOST}:${Bun.env.CLIENT_PORT}`;

/**
 * @param app Test Elysia Application
 * @param path The path to the API endpoint
 * @returns Returns the response from the API in JSON format
 */
export default async function responseProcessor(app: Elysia, path: string) {
    return await app
        .handle(new Request(`${BASE_URL}${path}`))
        .then(async (res) => res.json());
}
