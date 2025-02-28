const origin =
    import.meta.env.SERVER_AMBIENT === "development"
        ? `${Bun.env.CLIENT_HOST}${Bun.env.CLIENT_PORT}`
        : Bun.env.CLIENT_HOST;

export const corsOptions = {
    origin,
    methods: [ "GET", "POST", "PUT", "PATCH", "DELETE" ],
    allowedHeaders: [
        "Content-Type",
        "Authorization",
        "Accept-Encoding",
        "Accept",
        "referrer-policy",
        "Access-Control-Allow-Origin",
    ],
    credentials: true,
    maxAge: 3600, // 1 hour
};
