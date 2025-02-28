FROM oven/bun

WORKDIR /app

COPY package.json .
COPY bun.lockb .

RUN bun install --production

COPY src src
COPY tsconfig.json .
COPY nginx.conf .

ENV NODE_ENV production
CMD ["bun", "run", "src/server.ts"]

EXPOSE 80
EXPOSE 3000
EXPOSE 3001
