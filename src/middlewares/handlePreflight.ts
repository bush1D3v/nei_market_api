import {corsOptions} from "@/config/cors";
import type {ElysiaSet} from "@/types/Elysia/Set";

export default function handlePreflight(set: ElysiaSet) {
	set.headers["Access-Control-Allow-Methods"] = corsOptions.methods.join(",");
	set.headers["Access-Control-Allow-Headers"] = corsOptions.allowedHeaders.join(",");
	set.headers["Access-Control-Allow-Credentials"] = corsOptions.credentials.toString();
	set.headers["Access-Control-Max-Age"] = corsOptions.maxAge.toString();
}
