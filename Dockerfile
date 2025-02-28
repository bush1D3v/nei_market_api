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

ENV NODE_ENV production

RUN apt-get update && apt-get install -y nginx

RUN apt-get clean && rm -rf /var/lib/apt/lists/*

CMD service nginx start && bun run src/server.ts

EXPOSE 80
EXPOSE 3000
EXPOSE 3001
# EXPOSE 5432
