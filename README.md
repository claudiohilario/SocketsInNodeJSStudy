# Sockets in NodeJs Study

## Activate debug in client:

```js
    localStorage.debug = '*';
    localStorage.debug = 'engine.io-client:polling-xhr';
```
### Example:
```js
var socket = io('http://localhost:50000');
localStorage.debug = '*';
socket.on('greeting-from-server', function(message) {
    document.body.appendChild(
        document.createTextNode(message.greeting)
    );

    socket.emit('greeting-from-client', {
        greeting: 'Hello Server'
    });
});
```

## Activate debug in server

```cli
DEBUG=* node server.js
DEBUG=socket.io:server node server
```

```cli
export DEBUG=*
node server.js
```

