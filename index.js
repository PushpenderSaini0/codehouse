const express = require('express');
const CONFIG = require('./codehouse.json');
const webSocket = require('./websocket/index');
const userHandler = require('./user/userHandler');
const hostHandler = require('./websocket/hostHandler');
const memberHandler = require('./websocket/memberHandler');
const { instrument } = require("@socket.io/admin-ui");

const app = express();
app.use(express.static('public'));
const server = app.listen(CONFIG.port);
const IO = webSocket.init(server);
instrument(IO, { auth: false });

IO.of("/").on('connection', memberHandler);
IO.of("/host").on("connection", hostHandler);