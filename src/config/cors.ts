export const corsOptions = {
	origin: `${Bun.env.CLIENT_HOST}:${Bun.env.CLIENT_PORT}`,
	methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
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
	aot: false,
	exposeHeaders: true as const,
	preflight: true,
};
