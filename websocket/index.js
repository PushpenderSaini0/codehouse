let ws

const webSocket = {
    init: (server) => {
        ws = require('socket.io')(server);
        return ws;
    }
}

module.exports = webSocket;