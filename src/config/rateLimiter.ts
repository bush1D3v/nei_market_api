import type {Options} from "elysia-rate-limit";

export const rateLimiterOptions: Partial<Options> = {
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	errorResponse: "Too many requests from this IP, please try again after 15 minutes",
	headers: true,
};
