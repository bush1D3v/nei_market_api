import {getStatusText} from "@/enums/statusCode";

export default function swaggerDetail(
	description: string,
	statusCode: number,
	schema: string,
	responseIsArray = false,
) {
	const statusDescription = getStatusText(statusCode);
	const errorResponses = {
		400: {
			description: "Bad Request",
			content: {
				"application/json": {
					schema: {
						$ref: "#/components/schemas/CatchError",
					},
					examples: {
						value: {
							status: 400,
							message: "Personalized message - Bad Request",
							error: "Error: BAD_REQUEST\n at...",
							date: "2025-01-02T19:18:46.238Z",
						},
					},
				},
			},
		},
		401: {
			description: "Unauthorized",
			content: {
				"application/json": {
					schema: {
						$ref: "#/components/schemas/CatchError",
					},
					examples: {
						value: {
							status: 401,
							message: "Personalized message - Unauthorized",
							error: "Error: UNAUTHORIZED\n at...",
							date: "2025-01-02T19:18:46.238Z",
						},
					},
				},
			},
		},
		403: {
			description: "Forbidden",
			content: {
				"application/json": {
					schema: {
						$ref: "#/components/schemas/CatchError",
					},
					examples: {
						value: {
							status: 403,
							message: "Personalized message - Forbidden",
							error: "Error: FORBIDDEN\n at...",
							date: "2025-01-02T19:18:46.238Z",
						},
					},
				},
			},
		},
		404: {
			description: "Not Found",
			content: {
				"application/json": {
					schema: {
						$ref: "#/components/schemas/CatchError",
					},
					examples: {
						value: {
							status: 404,
							message: "Personalized message - Not Found",
							error: "Error: NOT_FOUND\n at...",
							date: "2025-01-02T19:18:46.238Z",
						},
					},
				},
			},
		},
		429: {
			description: "Too Many Requests",
			content: {
				"application/json": {
					schema: {
						$ref: "#/components/schemas/CatchError",
					},
					examples: {
						value: {
							status: 429,
							message:
								"Too many requests from this IP, please try again after 5 minutes",
							error: "Error: TOO_MANY_REQUESTS\n at...",
							date: "2025-01-02T19:18:46.238Z",
						},
					},
				},
			},
		},
		500: {
			description: "Internal Server Error",
			content: {
				"application/json": {
					schema: {
						$ref: "#/components/schemas/CatchError",
					},
				},
			},
		},
	};

	if (responseIsArray) {
		return {
			description,
			responses: {
				[statusCode]: {
					description: statusDescription,
					content: {
						"application/json": {
							schema: {
								type: "array",
								items: {
									$ref: `#/components/schemas/${schema}`,
								},
							},
						},
					},
				},
				...errorResponses,
			},
		};
	}

	return {
		description,
		responses: {
			[statusCode]: {
				description: statusDescription,
				content: {
					"application/json": {
						schema: {
							$ref: `#/components/schemas/${schema}`,
						},
					},
				},
			},
			...errorResponses,
		},
	};
}
