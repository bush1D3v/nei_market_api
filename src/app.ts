import { Elysia } from "elysia";
import { CoinGeckoRoutes } from "@/routes/CoinGecko";
import { BrapiDevRoutes } from "@/routes/BrapiDev";
import { FinnhubRoutes } from "@/routes/Finnhub";
import { CurrencyQuotesRoutes } from "@/routes/CurrencyQuotes";
import { GenerativeAIRoutes } from "@/routes/Gemini";
import cors from "@/middlewares/cors";
import helmet from "@/middlewares/helmet";
import rateLimiter from "@/middlewares/rateLimiter";
import swagger from "@/middlewares/swagger";

const app = new Elysia();

//app.use(cors);
app.use(helmet);
app.use(rateLimiter);
app.use(swagger);
app.use(CoinGeckoRoutes as any);
app.use(BrapiDevRoutes as any);
app.use(GenerativeAIRoutes as any);
app.use(FinnhubRoutes as any);
app.use(CurrencyQuotesRoutes as any);

export default app;
