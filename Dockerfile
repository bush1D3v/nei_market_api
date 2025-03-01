FROM nginx:1.26.3 AS nginx

FROM ubuntu:22.04 AS dependencies

RUN apt-get update && apt-get install -y \
    libssl3 \
    libcrypto3

FROM oven/bun

WORKDIR /app

COPY package.json .
COPY bun.lockb .

RUN bun install --production

COPY src src
# COPY prisma prisma
COPY tsconfig.json .
COPY nginx.conf /etc/nginx/nginx.conf
# RUN bunx prisma generate

ENV NODE_ENV=production

COPY --from=nginx /usr/sbin/nginx /usr/sbin/nginx
COPY --from=nginx /etc/nginx /etc/nginx
COPY --from=nginx /usr/share/nginx/html /usr/share/nginx/html

COPY --from=dependencies /usr/lib/x86_64-linux-gnu/libssl.so.3 /usr/lib/libssl.so.3
COPY --from=dependencies /usr/lib/x86_64-linux-gnu/libcrypto.so.3 /usr/lib/libcrypto.so.3

CMD ["sh", "-c", "nginx -g 'daemon off;' && bun run src/server.ts"]

EXPOSE 80
EXPOSE 3000
EXPOSE 3001
# EXPOSE 5432
