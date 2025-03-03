FROM oven/bun:alpine

WORKDIR /app

COPY package.json .
COPY bun.lockb .

RUN bun install --production

COPY src src
# COPY prisma prisma
COPY tsconfig.json .
# RUN bunx prisma generate

ENV NODE_ENV=production

RUN apk update && apk add nginx

COPY nginx.conf /etc/nginx/nginx.conf

CMD ["sh", "-c", "nginx && bun run src/server.ts"]

EXPOSE 80
EXPOSE 3000
EXPOSE 3001
# EXPOSE 5432
