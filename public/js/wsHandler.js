import { getEditorValue, setEditorValue, didEditorValueChange } from './editor.js';
import { displayRoomKey } from './domHelper.js';

let SOCKET = null;
let ROOMKEY = null;
const sendCode = () => {
    SOCKET.emit('PUSH-CODE', { ROOMKEY, code: getEditorValue() });
}

const codeUpdater = code => {
    setEditorValue(code);
}

export const hostRoom = () => {
    SOCKET = io.connect("ws://localhost:3000/host");
    SOCKET.emit('HOST-ROOM', (roomKey) => {
        ROOMKEY = roomKey;
        document.querySelector("section").remove();
        displayRoomKey(roomKey);
        didEditorValueChange(sendCode);
    });
}

export const joinRoom = () => {
    SOCKET = io.connect("ws://localhost:3000/");
    ROOMKEY = document.getElementById("room-key").value;
    SOCKET.emit("JOIN-ROOM", ROOMKEY, () => {
        document.querySelector("section").remove();
        displayRoomKey(ROOMKEY);
        document.getElementById("code").disabled = true;
        SOCKET.on("CODE-SERVE", codeUpdater);
    });
}

