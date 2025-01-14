import {describe, expect, it} from "bun:test";
import responseProcessor from "#/helpers/responseProcessor";
import app from "@/app";
import type {New} from "@/types/Finnhub/New";

describe("Finnhub Routes", () => {
	describe("GET /api/v1/news", () => {
		it("Return a response", async () => {
			const {response, json} = await responseProcessor(app, "/api/v1/news");

			expect(response).toBeInstanceOf(Response);
			expect(response).toHaveProperty("status");
			expect(response.status).toBe(200);

			expect(json).toBeInstanceOf(Array);
			for (const item of json) {
				expect(item).toHaveProperty("category");
				expect(item).toHaveProperty("datetime");
				expect(item).toHaveProperty("headline");
				expect(item).toHaveProperty("id");
				expect(item).toHaveProperty("image");
				expect(item).toHaveProperty("related");
				expect(item).toHaveProperty("source");
				expect(item).toHaveProperty("summary");
				expect(item).toHaveProperty("url");
			}
		});

		it("Response has correct types", async () => {
			const {response, json}: {response: Response; json: New[]} = await responseProcessor(
				app,
				"/api/v1/company-news",
			);

			expect(response).toBeInstanceOf(Response);
			expect(response).toHaveProperty("status");
			expect(response.status).toBe(200);

			expect(json).toBeInstanceOf(Array);
			for (const item of json) {
				expect(item.category).toBeString();
				expect(item.datetime).toBeNumber();
				expect(item.headline).toBeString();
				expect(item.id).toBeNumber();
				expect(item.image).toBeString();
				expect(item.related).toBeString();
				expect(item.source).toBeString();
				expect(item.summary).toBeString();
				expect(item.url).toBeString();
			}
		});
	});

	describe("GET /api/v1/company-news", () => {
		it("Return a response", async () => {
			const {response, json} = await responseProcessor(app, "/api/v1/company-news");

			expect(response).toBeInstanceOf(Response);
			expect(response).toHaveProperty("status");
			expect(response.status).toBe(200);

			expect(json).toBeInstanceOf(Array);
			for (const item of json) {
				expect(item).toHaveProperty("category");
				expect(item).toHaveProperty("datetime");
				expect(item).toHaveProperty("headline");
				expect(item).toHaveProperty("id");
				expect(item).toHaveProperty("image");
				expect(item).toHaveProperty("related");
				expect(item).toHaveProperty("source");
				expect(item).toHaveProperty("summary");
				expect(item).toHaveProperty("url");
			}
		});

		it("Response has correct types", async () => {
			const {response, json}: {response: Response; json: New[]} = await responseProcessor(
				app,
				"/api/v1/company-news",
			);

			expect(response).toBeInstanceOf(Response);
			expect(response).toHaveProperty("status");
			expect(response.status).toBe(200);

			expect(json).toBeInstanceOf(Array);
			for (const item of json) {
				expect(item.category).toBeString();
				expect(item.datetime).toBeNumber();
				expect(item.headline).toBeString();
				expect(item.id).toBeNumber();
				expect(item.image).toBeString();
				expect(item.related).toBeString();
				expect(item.source).toBeString();
				expect(item.summary).toBeString();
				expect(item.url).toBeString();
			}
		});
	});
});
