import type { ElysiaSwaggerConfig } from "@elysiajs/swagger";

export const swaggerConfig: ElysiaSwaggerConfig = {
    version: "1.0.0",
    documentation: {
        openapi: "3.1.0",
        security: [
            {
                bearerAuth: [],
            },
        ],
        tags: [
            {
                name: "CoinGecko",
                description: "CoinGecko API (Cryptocurrencies)",
            },
            {
                name: "BrapiDev",
                description: "BrapiDev API (Stocks)",
            },
            {
                name: "Finnhub",
                description: "Finnhub API (News)",
            },
            {
                name: "CurrencyQuotes",
                description: "Quotes API (Forex)",
            },
            {
                name: "GenerativeAI",
                description: "Gemini API (AI Chatbot)",
            },
        ],
        info: {
            title: "NEI Market Analytics API Documentation",
            version: "1.0.0",
            contact: {
                name: "Victor José Lopes Navarro",
                email: "victor.jose.lopes.navarro@gmail.com",
                url: "https://bush1d3v-portfolio.vercel.app/",
            },
            license: {
                name: "MIT",
                url: "https://opensource.org/licenses/MIT",
            },
            description:
                "NEI Market Analytics is an open-source project designed to provide comprehensive market value analyses for various financial instruments and digital assets. This repository aims to create a robust platform for tracking and analyzing market trends across multiple sectors.",
            termsOfService: "https://opensource.org/licenses/MIT",
        },
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                },
            },
        },
        servers: [
            {
                url: "http://localhost:3000",
                description: "Local Server",
            },
        ],
    },
    autoDarkMode: true,
    theme: {
        dark: "darkly",
        light: "flatly",
    },
};
