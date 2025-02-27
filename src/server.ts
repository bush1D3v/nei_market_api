import app from "./app";
import { Server } from "socket.io";
import { setSocket } from "@/proxy/Gemini";
import { corsOptions } from "./config/cors";
import http from "node:http";

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Servidor Socket.IO rodando!");
})

const io = new Server(server, {
    cors: corsOptions
});

io.on("connection", (socketConnection) => {
    setSocket(socketConnection);
});

server.listen(Bun.env.SOCKET_PORT, () => {
    console.log("🌐 Servidor Socket.IO rodando na porta 3001");
});

app.listen(Bun.env.SERVER_PORT);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
