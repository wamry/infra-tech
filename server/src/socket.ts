import { Express } from 'express';
import { Server, Socket } from 'socket.io';
import http from 'http';

export const createSocket = (app: Express): Server => {
  const server = http.createServer(app);
  const io = new Server(server, {
    cors: {
      origin: '*',
      methods: ["GET", "POST"],
    },
  });
  io.listen(Number(process.env.SOCKET_PORT) || 5050);

  io.on('connection', (socket: Socket) => {
    console.log('User connected');
    socket.emit('welcome', 'Welcome to the Socket.IO server!');
    socket.on('disconnect', () => console.log('User disconnected'));
  });
  return io;
}

