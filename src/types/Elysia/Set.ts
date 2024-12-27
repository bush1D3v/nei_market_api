import type { HTTPHeaders } from "elysia/dist/types";

export interface ElysiaSet {
    headers: HTTPHeaders;
    status?: number;
    redirect?: string;
}
