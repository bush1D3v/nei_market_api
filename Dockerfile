# Stage 1: Use a imagem oven/bun para instalar dependências do Bun
FROM oven/bun AS bun

WORKDIR /app

COPY package.json .
COPY bun.lockb .

RUN bun install --production

COPY src src
COPY tsconfig.json .
# COPY prisma prisma
# RUN bunx prisma generate

# Stage 2: Use a imagem oficial do Nginx e copie os arquivos necessários do Bun
FROM nginx:1.26.3 AS nginx

# Copie os arquivos necessários do Bun
COPY --from=bun /app /app
COPY --from=bun /root/.bun /root/.bun

# Copie a configuração do Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Defina o diretório de trabalho
WORKDIR /app

# Defina a variável de ambiente
ENV NODE_ENV=production

# Comando para iniciar o Nginx e o Bun
CMD ["sh", "-c", "nginx -g 'daemon off;' && /root/.bun/bin/bun run src/server.ts"]

# Exponha as portas necessárias
EXPOSE 80
EXPOSE 3000
EXPOSE 3001
# EXPOSE 5432
