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
        SERVER_AMBIENT: string;
        LOCAL_HOST: string;
        LOCAL_PORT: number;
        PROXY_PORT: number;
        DATABASE_URL: string;
        GITHUB_CLIENT_ID: string;
        GITHUB_CLIENT_SECRET: string;
        JWT_SECRET: string;
    }
}
