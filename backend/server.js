const express = require('express');
const { createServer } = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
const server = createServer(app);

app.use(cors());

const io = socketIo(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    }
});

let games = [];

io.on('connection', socket => {
    console.log(`User joined: ${socket.id}`);

    socket.on('playerJoin', (room) => {
        console.log(`User joined room: ${socket.id}`);
        socket.join(room);

        let game = games.find(game => game.roomId === room);

        if (!game) {
            games.push(
                {
                    roomId: room,
                    players: [],
                }
            );
            game = games.find(game => game.roomId === room);
        }

        const player = { name: `Player ${game?.players.length + 1}` };
        game.players.push(player);

        socket.room = room;
        socket.name = player.name;

        io.to(room).emit('broadcastPlayerJoin', player, game.players);
    });

    socket.on('disconnect', () => {
        console.log(`Player disconnected: ${socket.id}`);

        let game = games.find(game => game.roomId === socket.room);

        if (game) {
            game.players = game.players.filter(player => player.name != socket.name);

            io.to(socket.room).emit('broadcastPlayerLeave', game.players);

            if (game.players.length === 0) {
                games = games.filter(game => game.roomId !== socket.room);
            }
        }
    });



    // socket.on('message', (message, room) => {
    //     console.log(message);
    //     if (room === '') {
    //         socket.broadcast.emit('broadcast', message)
    //     }
    //     else {
    //         socket.to(room).emit('broadcast', message);
    //     }
    // });

    // socket.on('join-room', room => {
    //     socket.join(room);
    // });
});

const PORT = process.env.PORT || 8000;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});