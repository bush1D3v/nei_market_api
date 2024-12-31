import app from "./app";
import {corsOptions} from "@/config/cors";
import {Server} from "socket.io";
import {setSocket} from "@/proxy/Gemini";

const io = new Server().listen(Bun.env.SOCKET_PORT, {
	cors: corsOptions,
});

io.on("connection", (socketConnection) => {
	setSocket(socketConnection);
});

app.listen(Bun.env.SERVER_PORT);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
