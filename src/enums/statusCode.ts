enum StatusCode {
	OK = 200,
	CREATED = 201,
	ACCEPTED = 202,
	NO_CONTENT = 204,
	BAD_REQUEST = 400,
	PARSE = 400,
	UNAUTHORIZED = 401,
	FORBIDDEN = 403,
	NOT_FOUND = 404,
	VALIDATION = 422,
	TOO_MANY_REQUESTS = 429,
	INVALID_COOKIE_SIGNATURE = 498,
	INTERNAL_SERVER_ERROR = 500,
	NOT_IMPLEMENTED = 501,
	BAD_GATEWAY = 502,
	SERVICE_UNAVAILABLE = 503,
	UNKNOWN = 520,
}

function getStatusText(code: StatusCode): string {
	switch (code) {
		case StatusCode.OK:
			return "OK";
		case StatusCode.CREATED:
			return "Created";
		case StatusCode.ACCEPTED:
			return "Accepted";
		case StatusCode.NO_CONTENT:
			return "No Content";
		case StatusCode.BAD_REQUEST || StatusCode.PARSE:
			return "Bad Request";
		case StatusCode.UNAUTHORIZED:
			return "Unauthorized";
		case StatusCode.FORBIDDEN:
			return "Forbidden";
		case StatusCode.NOT_FOUND:
			return "Not Found";
		case StatusCode.VALIDATION:
			return "Validation Failed";
		case StatusCode.TOO_MANY_REQUESTS:
			return "Too Many Requests";
		case StatusCode.INVALID_COOKIE_SIGNATURE:
			return "Invalid Cookie Signature";
		case StatusCode.INTERNAL_SERVER_ERROR:
			return "Internal Server Error";
		case StatusCode.NOT_IMPLEMENTED:
			return "Not Implemented";
		case StatusCode.BAD_GATEWAY:
			return "Bad Gateway";
		case StatusCode.SERVICE_UNAVAILABLE:
			return "Service Unavailable";
		case StatusCode.UNKNOWN:
			return "Unknown Error";
		default:
			return "Unknown Status Code";
	}
}

export {StatusCode, getStatusText};
