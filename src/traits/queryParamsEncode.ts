interface QueryParams {
    [ key: string ]: string | number | boolean;
}

export default function queryParamsEncode(query: QueryParams): QueryParams {
    for (const key in query) {
        // biome-ignore lint/suspicious/noPrototypeBuiltins: <explanation>
        if (query.hasOwnProperty(key) && query[ key ]) {
            query[ key ] = encodeURIComponent(query[ key ]);
        }
    }

    return query;
}
