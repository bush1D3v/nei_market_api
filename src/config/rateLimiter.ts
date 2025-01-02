import type {Options} from "elysia-rate-limit";

export const rateLimiterOptions: Partial<Options> = {
	max: 100,
	errorResponse: "Too many requests from this IP, please try again after 5 minutes",
	headers: true,
	duration: 5 * 60 * 1000, // 5 minutes
};
