const CLIENT_HOST = Bun.env.CLIENT_HOST;
const CLIENT_PORT = Bun.env.CLIENT_PORT;

export const corsOptions = {
	origin: true,
	methods: [ "GET", "POST", "PUT", "PATCH", "DELETE" ],
	allowedHeaders: [
		"Content-Type",
		"Authorization",
		"Accept-Encoding",
		"Accept",
		"referrer-policy",
	],
	credentials: true,
	maxAge: 86400,
	aot: false,
	exposeHeaders: true as true,
	preflight: true
};
