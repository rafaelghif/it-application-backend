import { Server } from "socket.io";

export const socketIo = (httpServer) => {
    const io = new Server(httpServer, {
        cors: {
            origin: "*"
        }
    });

    // Middleware 
    io.use((socket, next) => {
        next();
    });

    io.on("connection", (socket) => {
        console.log(`Connected ! ${socket.id}`);
    });
}