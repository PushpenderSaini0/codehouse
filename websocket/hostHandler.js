const IO = require('./index');

const hostHandler = socket => {
    socket.on('HOST-ROOM', (data, callback) => {
        const roomKey = Date.now().toString(16);;
        socket.join(roomKey);
        callback(roomKey);
    });
    socket.on('PUSH-CODE', (obj) => {
        IO.getIO().to(obj.ROOMKEY).emit('CODE-SERVE', obj.code);
    });
}
module.exports = hostHandler;