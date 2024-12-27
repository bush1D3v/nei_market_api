import app from "./app";
import { corsOptions } from "@/config/cors";
import { Server } from "socket.io";
import { setSocket } from "@/proxy/Gemini";

const SOCKET_PORT = Bun.env.SOCKET_PORT;

const io = new Server().listen(SOCKET_PORT, {
    cors: corsOptions
});

io.on("connection", (socketConnection) => {
    setSocket(socketConnection);
});

const SERVER_PORT = Bun.env.SERVER_PORT;

app.listen(SERVER_PORT);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
