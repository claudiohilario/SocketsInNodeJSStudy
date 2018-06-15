const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const fs = require('fs');

const app = express();

let server;
let io;

app.get('/', function(req, res) {
    res.sendFile(`${__dirname}/index.html`);
});

server = http.Server(app);
server.listen(50000);

io = socketIO(server);

io.on('connection', function(socket) {
    socket.emit('greeting-from-server', {
        greeting: 'Hello Client'
    });

    socket.on('greeting-from-client', function(message) {
        console.log(message);
    });
});