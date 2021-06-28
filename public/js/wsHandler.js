let SOCKET = null;
let ROOMKEY = null;

const sendCode = () => {
    SOCKET.emit('PUSH-CODE', { ROOMKEY, code: document.getElementById("code").value });
}

const codeUpdater = code => {
    document.getElementById("code").value = code;
}

export const hostRoom = () => {
    SOCKET = io.connect("ws://localhost:3000/host");
    const hostName = document.getElementById("host-name").value;
    SOCKET.emit('HOST-ROOM', { hostName }, (roomKey) => {
        ROOMKEY = roomKey;
        document.getElementById("init").innerHTML = "";
        document.getElementById("room-key-msg").innerHTML = "Your roomkey is : " + roomKey;
        document.getElementById("code").addEventListener("keyup", sendCode);
    });
}

export const joinRoom = () => {
    SOCKET = io.connect("ws://localhost:3000/");
    ROOMKEY = document.getElementById("room-key").value;
    SOCKET.emit("JOIN-ROOM", ROOMKEY, () => {
        document.getElementById("init").innerHTML = "";
        document.getElementById("code").disabled = true;
        SOCKET.on("CODE-SERVE", codeUpdater);
    });
}

