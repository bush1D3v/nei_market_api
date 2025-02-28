import app from "./app";
import { Server } from "socket.io";
import { setSocket } from "@/proxy/Gemini";
import { corsOptions } from "./config/cors";
import http from "node:http";

const server = http.createServer();

const io = new Server(server, {
    cors: corsOptions,
});

io.on("connection", (socketConnection) => {
    setSocket(socketConnection);
});

io.use((socket, next) => {
    socket.request.headers[ "Access-Control-Allow-Methods" ] = corsOptions.methods.join(",");
    socket.request.headers[ "Access-Control-Allow-Headers" ] = corsOptions.allowedHeaders.join(",");
    socket.request.headers[ "Access-Control-Allow-Credentials" ] = corsOptions.credentials.toString();
    socket.request.headers[ "Access-Control-Max-Age" ] = corsOptions.maxAge.toString();
    next();
});

server.listen(Bun.env.SOCKET_PORT, () => {
    console.log("🌐 Servidor Socket.IO rodando na porta 3001");
});

app.listen(Bun.env.SERVER_PORT);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
