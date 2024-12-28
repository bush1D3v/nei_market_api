import {Elysia} from "elysia";
import {listCurrencyQuotes} from "@/proxy/CurrencyQuotes";
import swaggerDetail from "@/helpers/SwaggerDetail";

export function CurrencyQuotesRoutes(app: Elysia): Elysia {
	return app.use(
		new Elysia({
			name: "Currency Quotes Routes",
			aot: false,
			prefix: "/api",
			detail: {
				tags: ["CurrencyQuotes"],
			},
		}).get("/latest", async () => listCurrencyQuotes, {
			detail: swaggerDetail("Get the latest currency quotes", 200, "CurrencyQuotes"),
		}),
	);
}
