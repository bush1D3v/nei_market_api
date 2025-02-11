import type { ElysiaCustomStatusResponse } from "elysia/dist/error";
import { error } from "elysia";
import { getStatusText } from "@/enums/statusCode";

export interface CatchError {
    status: number;
    message: string;
    error: unknown;
}

export interface CustomError {
    status?: number;
    message?: string;
    [ key: string ]: unknown;
}

export default function catchErrors(
    err: CatchError,
): ElysiaCustomStatusResponse<number, CatchError> {
    return error(err.status, {
        message: `${err.message} - ${getStatusText(err.status)}`,
        status: err.status,
        error: err.error,
        date: new Date(),
    });
}
