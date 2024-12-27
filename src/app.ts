import { Elysia } from "elysia";
import { CoinGeckoRoutes } from "@/routes/CoinGecko";
import { BrapiDevRoutes } from "@/routes/BrapiDev";
import { FinnhubRoutes } from "@/routes/Finnhub";
import { CurrencyQuotesRoutes } from "@/routes/CurrencyQuotes";
import { GenerativeAIRoutes } from "@/routes/Gemini";
import cors from "@/middlewares/cors";
import rateLimiter from "@/middlewares/rateLimiter";
import swagger from "@/middlewares/swagger";
import helmet from "@/middlewares/helmet";

const app = new Elysia({
    name: "NEI Market Analytics API",
    aot: false
}).onRequest(({ set }) => {
    helmet(set);
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
