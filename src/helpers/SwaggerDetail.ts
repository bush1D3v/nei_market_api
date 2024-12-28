import { getStatusText } from "@/enums/statusCode";

export default function swaggerDetail(
    description: string,
    statusCode: number,
    schema: string,
    responseIsArray = false,
) {
    const statusDescription = getStatusText(statusCode);
    const errorResponses = {
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
                [ statusCode ]: {
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
            [ statusCode ]: {
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
