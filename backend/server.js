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

    socket.on('playerJoin', (room, questions) => {
        console.log(`User joined room: ${socket.id}`);
        socket.join(room);

        let game = games.find(game => game.roomId === room);

        if (!game) {
            games.push(
                {
                    roomId: room,
                    players: [],
                    questions: questions,
                }
            );
            game = games.find(game => game.roomId === room);
        }

        const player = {
            name: `Player ${game?.players.length + 1}`,
            totalScore: 0,
            totalTimeScore: 0,
            totalSpaceScore: 0,
            totalDsaScore: 0,
            totalClarityScore: 0,
            currentScore: 0,
            currentTimeScore: 0,
            currentSpaceScore: 0,
            currentDsaScore: 0,
            currentClarityScore: 0,
            questionIndex: 0,
        };
        game.players.push(player);

        socket.room = room;
        socket.name = player.name;

        console.log(questions);

        io.to(room).emit('broadcastPlayerJoin', player, game.players);
    });

    socket.on('disconnect', () => {
        console.log(`Player disconnected: ${socket.id}`);

        let game = games.find(game => game.roomId === socket.room);

        if (game) {
            game.players = game.players.filter(player => player.name != socket.name);
            if (game.players.length === 0) {
                games = games.filter(game => game.roomId !== socket.room);
            } else {
                io.to(socket.room).emit('broadcastPlayerLeave', game.players);
            }
        }
    });

    socket.on('gameStarted', (room) => {
        let game = games.find(game => game.roomId === room);
        io.to(room).emit('broadcastGameStarted', game.questions[0]);
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