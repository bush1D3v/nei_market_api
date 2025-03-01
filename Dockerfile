# Stage 1: Use a imagem oficial do Nginx para obter os arquivos necessários
FROM nginx:1.26.3 AS nginx

# Stage 2: Use uma imagem base que suporte apt-get para instalar as bibliotecas necessárias
FROM ubuntu:20.04 AS dependencies

RUN apt-get update && apt-get install -y \
    libssl1.1 \
    libcrypto1.1

# Stage 3: Use a imagem oven/bun e copie os arquivos necessários do Nginx e das bibliotecas
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

# Copie os binários e arquivos de configuração do Nginx da etapa nginx
COPY --from=nginx /usr/sbin/nginx /usr/sbin/nginx
COPY --from=nginx /etc/nginx /etc/nginx
COPY --from=nginx /usr/share/nginx/html /usr/share/nginx/html

# Copie as bibliotecas necessárias da etapa dependencies
COPY --from=dependencies /usr/lib/x86_64-linux-gnu/libssl.so.1.1 /usr/lib/libssl.so.1.1
COPY --from=dependencies /usr/lib/x86_64-linux-gnu/libcrypto.so.1.1 /usr/lib/libcrypto.so.1.1

CMD ["sh", "-c", "nginx -g 'daemon off;' && bun run src/server.ts"]

EXPOSE 80
EXPOSE 3000
EXPOSE 3001
# EXPOSE 5432
