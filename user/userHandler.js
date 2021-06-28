const IO = require('../websocket/index');
const userHandler = {
    getNumber: () => IO.getIO().engine.clientsCount
};

module.exports = userHandler;