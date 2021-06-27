const express = require('express');
const CONFIG = require('./codehouse.json');
const webSocket = require('./websocket/index');
const { instrument } = require("@socket.io/admin-ui");

const app = express();
app.use(express.static('public'));
const server = app.listen(CONFIG.port);
const IO = webSocket.init(server);
instrument(IO, { auth: false });

IO.sockets.on('connection', (socket) => {
    // console.log(socket.adapter.rooms);
    socket.on('HOST-ROOM', (data, callback) => {
        const roomKey = Date.now().toString(16);;
        socket.join(roomKey);
        callback(roomKey);
    });
    socket.on('PUSH-CODE', (obj) => {
        IO.to(obj.ROOMKEY).emit('CODE-SERVE', obj.code);
    });
    socket.on('JOIN-ROOM', (roomkey, callback) => {
        socket.join(roomkey);
        callback();
    });
});