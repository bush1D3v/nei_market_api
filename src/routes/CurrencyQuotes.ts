import { Elysia } from "elysia";
import { listCurrencyQuotes } from "@/proxy/CurrencyQuotes";

export function CurrencyQuotesRoutes(app: Elysia): Elysia {
    return app.use(
        new Elysia({
            name: "Currency Quotes Routes",
            aot: false,
            prefix: "/api",
            detail: {
                tags: [ "CurrencyQuotes" ],
            },
        }).get("/latest.json", async () => listCurrencyQuotes)
    );
}
