const IO = require('./index');
const userHandler = require('../user/userHandler');
const MAX_USER = require('../codehouse.json').MAX_USER;

const hostHandler = socket => {
    if (userHandler.getNumber() <= MAX_USER) {
        socket.on('HOST-ROOM', (callback) => {
            const roomKey = Date.now().toString(16);;
            socket.join(roomKey);
            callback(roomKey);
        });
        socket.on('PUSH-CODE', (obj) => {
            IO.getIO().to(obj.ROOMKEY).emit('CODE-SERVE', obj.code);
        });
    }
    else {
        IO.getIO().in(socket.id).disconnectSockets(true);
    }
}
module.exports = hostHandler;