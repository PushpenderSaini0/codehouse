const express = require('express');
const webSocket = require('./websocket/index');

const app = express();
const port = 3000;
app.use(express.static('public'));
const server = app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})
const io = webSocket.init(server);


io.sockets.on('connection', (socket) => {
    // console.log(socket.adapter.rooms);
    socket.on('HOST-ROOM', (data, callback) => {
        const roomKey = Date.now().toString(16);;
        socket.join(roomKey);
        callback(roomKey);
    });
    socket.on('PUSH-CODE', (obj) => {
        io.to(obj.ROOMKEY).emit('CODE-SERVE', obj.code);
    });
    socket.on('JOIN-ROOM', (roomkey, callback) => {
        socket.join(roomkey);
        callback();
    });
});