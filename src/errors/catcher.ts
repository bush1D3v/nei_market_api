import type {ElysiaCustomStatusResponse} from "elysia/dist/error";
import {error} from "elysia";
import {getStatusText} from "@/enums/statusCode";

export interface CatchError {
	status: number;
	message: string;
	error: unknown;
}

export default function catchErrors(
	err: CatchError,
): ElysiaCustomStatusResponse<number, CatchError> {
	//console.error(err);
	return error(err.status, {
		message: `${err.message} - ${getStatusText(err.status)}`,
		status: err.status,
		error: err.error,
		date: new Date(),
	});
}
