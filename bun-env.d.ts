declare module "bun" {
    interface Env {
        BRAPI_HOST: string;
        BRAPI_KEY: string;
        CURRENCYQUOTES_HOST: string;
        FINNHUB_HOST: string;
        FINNHUB_KEY: string;
        COINGECKO_HOST: string;
        COINGECKO_KEY: string;
        GEMINI_KEY: string;
        CLIENT_HOST: string;
        CLIENT_PORT: number;
        COOKIE_SECRET: string;
        SERVER_PORT: number;
        SOCKET_PORT: number;
        SERVER_AMBIENT;
    }
}
