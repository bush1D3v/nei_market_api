import cors from "@elysiajs/cors";
import { corsOptions } from "@/config/cors";

export default cors({
    origin: corsOptions.origin,
    methods: corsOptions.methods,
    allowedHeaders: corsOptions.allowedHeaders,
    credentials: corsOptions.credentials,
    maxAge: corsOptions.maxAge,
    aot: corsOptions.aot,
    exposeHeaders: corsOptions.exposeHeaders,
    preflight: corsOptions.preflight,
});
