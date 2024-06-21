const express = require('express');
const app = express();
const cors = require('cors');

// Configure CORS for Express
app.use(cors());
app.use(express.json()); // To handle JSON request bodies

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World!'
    });
});

let i = 1;
app.post('/notif', (req, res) => {
    io.emit('data', `Hello, this is a notification number ${i}!`);
    res.json({
        message: `Notification number ${i} sent!`
    });
    i++;
});

// Import and configure HTTP and Socket.io
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');

// Configure CORS for Socket.io
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:5173', // Replace with your frontend domain
        methods: ['GET', 'POST'],
        allowedHeaders: ['my-custom-header'],
        credentials: true
    }
});

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`listening on *:${PORT}`);
});
