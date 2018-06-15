const http = require('http');
const socketIO = require('socket.io');
const fs = require('fs');

let server;
let io;

server = http.createServer(function(req, res) {
    fs.readFile(`${__dirname}/index.html`, function(err, data) {
        res.writeHead(200);
        res.end(data);
    });
});

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