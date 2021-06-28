const IO = require('./index');
const userHandler = require('../user/userHandler');
const MAX_USER = require('../codehouse.json').MAX_USER;

const memberHandler = socket => {
    if (userHandler.getNumber() <= MAX_USER) {
        socket.on('JOIN-ROOM', (roomkey, callback) => {
            socket.join(roomkey);
            callback();
        });
    }
    else {
        IO.getIO().in(socket.id).disconnectSockets(true);
    }
}
module.exports = memberHandler;