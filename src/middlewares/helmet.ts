import type {ElysiaSet} from "@/types/Elysia/Set";
import {helmetConfig} from "@/config/helmet";

export default function helmet(set: ElysiaSet) {
	set.headers["Content-Security-Policy"] = `
      default-src ${helmetConfig.csp.defaultSrc.join(" ")}, script-src ${helmetConfig.csp.scriptSrc.join(" ")}, style-src ${helmetConfig.csp.styleSrc.join(" ")}, img-src ${helmetConfig.csp.imgSrc.join(" ")}, connect-src ${helmetConfig.csp.connectSrc.join(" ")}, font-src ${helmetConfig.csp.fontSrc.join(" ")}, object-src ${helmetConfig.csp.objectSrc.join(" ")}
    `;
	set.headers["X-DNS-Prefetch-Control"] = helmetConfig.dnsPrefetchControl.allow ? "on" : "off";
	set.headers["X-Frame-Options"] = helmetConfig.frameguard.action.toUpperCase();
	if (!helmetConfig.hidePoweredBy) set.headers["X-Powered-By"] = "Elysia";
	set.headers["Strict-Transport-Security"] =
		`max-age=${helmetConfig.hsts.maxAge}; includeSubDomains; preload`;
	set.headers["X-Download-Options"] = helmetConfig.ieNoOpen ? "noopen" : "";
	set.headers["X-Content-Type-Options"] = helmetConfig.noSniff ? "nosniff" : "";
	set.headers["X-Permitted-Cross-Domain-Policies"] =
		helmetConfig.permittedCrossDomainPolicies.permittedPolicies;
	set.headers["Referrer-Policy"] = helmetConfig.referrerPolicy;
	set.headers["X-XSS-Protection"] = helmetConfig.xssFilter ? "1; mode=block" : "0";
	set.headers["Cross-Origin-Opener-Policy"] = helmetConfig.crossOriginOpenerPolicy.policy;
	set.headers["Cross-Origin-Embedder-Policy"] = helmetConfig.crossOriginEmbedderPolicy.policy;
	set.headers["Cross-Origin-Resource-Policy"] = helmetConfig.crossOriginResourcePolicy.policy;
	set.headers["Origin-Agent-Cluster"] = helmetConfig.originAgentCluster ? "?1" : "?0";
	set.headers["Permissions-Policy"] = `
        camera=${helmetConfig.permissionsPolicy.camera.join(" ")}, microphone=${helmetConfig.permissionsPolicy.microphone.join(" ")}, geolocation=${helmetConfig.permissionsPolicy.geolocation.join(" ")}, interest-cohort=${helmetConfig.permissionsPolicy.interestCohort.join(" ")}
    `;
	set.headers["Access-Control-Allow-Credentials"] = helmetConfig.credentials ? "true" : "false";
}
