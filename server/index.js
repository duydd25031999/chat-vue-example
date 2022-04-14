const io = require('socket.io');
const express = require('express');
const app = express();
const http = require("http");
const server = http.createServer(app);
const ioServer = io(server);
server.listen(3000);

console.log("demo 1");
app.get("/", (request, response) => {
  response.status(200).json({
    message: "hello world",
    data1: "Demo 1"
  })
});


const getClientRoom = () => {
    let index = 0;
    while (true) {
      if(!ioServer.sockets.adapter.rooms[index] || ioServer.sockets.adapter.rooms[index].length < 2) {
        return index;
      }
      index ++;
    }
}

ioServer.on('connect', socket => {
    const clientRoom = getClientRoom();

    socket.join(clientRoom);

    if(ioServer.sockets.adapter.rooms[clientRoom].length < 2) {
        ioServer.in(clientRoom).emit('statusRoom', 'Waiting for a stranger ...');
    } else {
        ioServer.in(clientRoom).emit('statusRoom', 'Strangers have entered the room');
    }

    socket.on('sendMessage', function (message) {
      socket.to(clientRoom).emit('receiveMessage', message);
    })

    socket.on('disconnect', (reason) => {
      socket.to(clientRoom).emit('statusRoom', 'The stranger has escaped. Waiting for the next one ....');
    });
});
