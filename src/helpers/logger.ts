import type Elysia from "elysia";

import { type InferContext, createPinoLogger, formatters } from "@bogeychan/elysia-logger";

export default function logger(app: Elysia) {
    type MyElysiaContext = InferContext<typeof app>;

    const log = createPinoLogger({
        formatters: {
            ...formatters,
            log(object: MyElysiaContext) {
                return formatters.log({
                    request: object.request,
                    body: object.body,
                    params: object.params,
                    query: object.query,
                    headers: object.headers,
                    error: object.error.message
                });
            },
        },
        file: "./logs/error.log",
    });

    return log;
}
