const express = require('express');
const webSocket = require('./websocket/index');

const app = express();
const port = 3000;
app.use(express.static('public'));
const server = app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})
const io = webSocket.init(server);