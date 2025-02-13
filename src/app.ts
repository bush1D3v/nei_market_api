import { Elysia } from "elysia";
import { CoinGeckoRoutes } from "@/routes/CoinGecko";
import { BrapiDevRoutes } from "@/routes/BrapiDev";
import { FinnhubRoutes } from "@/routes/Finnhub";
import { CurrencyQuotesRoutes } from "@/routes/CurrencyQuotes";
import { GenerativeAIRoutes } from "@/routes/Gemini";
import logger from "@/helpers/logger";
import cors from "@/middlewares/cors";
import rateLimiter from "@/middlewares/rateLimiter";
import swagger from "@/middlewares/swagger";
import helmet from "@/middlewares/helmet";
import handlePreflight from "@/middlewares/handlePreflight";
import catchErrors from "@/errors/catcher";

const app = new Elysia({
    name: "NEI Market Analytics API",
    aot: false,
}).onRequest(({ set, request }) => {
    if (!request.url.endsWith("/swagger")) helmet(set);

    if (request.method === "OPTIONS") handlePreflight(set);
});

const log = logger(app);

app.onError((ctx) => {
    log.error(ctx);
    return catchErrors({
        status: "status" in ctx.error ? ctx.error.status : 500,
        message: ctx.error.message,
        error: ctx.error.stack,
    });
});
app.use(cors);
app.use(rateLimiter);
app.use(swagger);
app.use(CoinGeckoRoutes);
app.use(BrapiDevRoutes);
app.use(GenerativeAIRoutes);
app.use(CurrencyQuotesRoutes);
app.use(FinnhubRoutes);

export default app;
