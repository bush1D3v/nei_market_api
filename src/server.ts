import app from "./app";
import {Server} from "socket.io";
import {setSocket} from "@/proxy/Gemini";
import {corsOptions} from "./config/cors";

const io = new Server({
	cors: corsOptions,
}).listen(Bun.env.SOCKET_PORT, {
	cors: corsOptions,
});

io.use((socket, next) => {
	socket.request.headers["Access-Control-Allow-Methods"] = corsOptions.methods.join(",");
	socket.request.headers["Access-Control-Allow-Headers"] = corsOptions.allowedHeaders.join(",");
	socket.request.headers["Access-Control-Allow-Credentials"] = corsOptions.credentials.toString();
	socket.request.headers["Access-Control-Max-Age"] = corsOptions.maxAge.toString();
	next();
});

io.on("connection", (socketConnection) => {
	setSocket(socketConnection);
});

app.listen(Bun.env.SERVER_PORT);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
