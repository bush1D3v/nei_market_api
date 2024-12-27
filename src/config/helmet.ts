const CLIENT_HOST = Bun.env.CLIENT_HOST;
const CLIENT_PORT = Bun.env.CLIENT_PORT;

export const helmetConfig = {
    csp: {
        defaultSrc: [ "'self'" ],
        scriptSrc: [ "'self'" ],
        styleSrc: [ "'self'" ],
        imgSrc: [
            "'self'",
            "https://coin-images.coingecko.com",
            "https://static2.finnhub.io",
            "https://brapi.dev",
        ],
        connectSrc: [
            "'self'",
            "https://api.coingecko.com",
            "https://brapi.dev",
            "https://cdn.moeda.info",
            "https://finnhub.io",
            "https://generativelanguage.googleapis.com",
        ],
        fontSrc: [ "'self'", "https://fonts.googleapis.com", "https://fonts.gstatic.com" ],
        objectSrc: [ "'none'" ],
    },
    dnsPrefetchControl: { allow: false },
    frameguard: { action: "sameorigin" },
    hidePoweredBy: false,
    hsts: {
        maxAge: 31536000, // 1 year
        includeSubDomains: true,
        preload: true,
    },
    ieNoOpen: true,
    noSniff: true,
    permittedCrossDomainPolicies: {
        permittedPolicies: "master-only",
    },
    referrerPolicy: "no-referrer" as const,
    xssFilter: true,
    crossOriginOpenerPolicy: { policy: "unsafe-none" },
    crossOriginEmbedderPolicy: { policy: "unsafe-none" },
    crossOriginResourcePolicy: { policy: "same-origin" },
    originAgentCluster: true,
    permissionsPolicy: {
        camera: [ "'none'" ],
        microphone: [ "'none'" ],
        geolocation: [ "" ],
        interestCohort: [ "" ],
    },
    credentials: true
};
