import type { ValueError } from "@sinclair/typebox/compiler";

export default function TErrorFormatter(errors: ValueError[]): string {
    return `${errors[ 0 ].message} - The value: '${errors[ 0 ].value}' is not a valid sessionId. </br> Example: ${errors[ 0 ].schema.examples[ 0 ]}`;
};
