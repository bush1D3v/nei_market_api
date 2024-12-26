import {rateLimit} from "elysia-rate-limit";
import {rateLimiterOptions} from "@/config/rateLimiter";

const rateLimiter = rateLimit(rateLimiterOptions);

export default rateLimiter;
