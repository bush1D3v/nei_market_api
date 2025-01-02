import catchErrors from "@/errors/catcher";
import type {Options} from "elysia-rate-limit";

export const rateLimiterOptions: Partial<Options> = {
	max: 100,
	errorResponse: catchErrors({
		status: 429,
		message: "Too many requests from this IP, please try again after 5 minutes",
		error: "Error: TOO_MANY_REQUESTS",
	}),
	headers: true,
	duration: 5 * 60 * 1000, // 5 minutes,
};
