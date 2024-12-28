const CLIENT_HOST = Bun.env.CLIENT_HOST;
const CLIENT_PORT = Bun.env.CLIENT_PORT;

export const corsOptions = {
	origin: `${CLIENT_HOST}:${CLIENT_PORT}`,
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
	maxAge: 86400,
	aot: false,
	exposeHeaders: true as const,
	preflight: true,
};
