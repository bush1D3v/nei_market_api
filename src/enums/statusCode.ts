enum StatusCode {
	OK = 200,
	CREATED = 201,
	ACCEPTED = 202,
	NO_CONTENT = 204,
	BAD_REQUEST = 400,
	UNAUTHORIZED = 401,
	FORBIDDEN = 403,
	NOT_FOUND = 404,
	INTERNAL_SERVER_ERROR = 500,
	NOT_IMPLEMENTED = 501,
	BAD_GATEWAY = 502,
	SERVICE_UNAVAILABLE = 503,
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
		case StatusCode.BAD_REQUEST:
			return "Bad Request";
		case StatusCode.UNAUTHORIZED:
			return "Unauthorized";
		case StatusCode.FORBIDDEN:
			return "Forbidden";
		case StatusCode.NOT_FOUND:
			return "Not Found";
		case StatusCode.INTERNAL_SERVER_ERROR:
			return "Internal Server Error";
		case StatusCode.NOT_IMPLEMENTED:
			return "Not Implemented";
		case StatusCode.BAD_GATEWAY:
			return "Bad Gateway";
		case StatusCode.SERVICE_UNAVAILABLE:
			return "Service Unavailable";
		default:
			return "Unknown Status Code";
	}
}

export {StatusCode, getStatusText};
