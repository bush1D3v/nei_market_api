import {Elysia} from "elysia";
import {listCurrencyQuotes} from "@/proxy/CurrencyQuotes";

export function CurrencyQuotesRoutes(app: Elysia) {
	app.get("/api/latest.json", async () => listCurrencyQuotes, {
		detail: {
			tags: ["CurrencyQuotes"],
		},
	});
}
