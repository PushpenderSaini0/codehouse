const SOCKET = io.connect("ws://localhost:3000/");;
let ROOMKEY = null;
const btnClickHandler = event => {
    if (event.target.id === "host-btn") {
        const hostName = document.getElementById("host-name").value;
        SOCKET.emit('HOST-ROOM', { hostName }, (roomKey) => {
            ROOMKEY = roomKey;
            document.getElementById("init").innerHTML = "";
            document.getElementById("room-key-msg").innerHTML = "Your Hosted roomkey is : " + roomKey;
            document.getElementById("code").addEventListener("change", sendCode);
        });
    }
    if (event.target.id === "join-btn") {
        ROOMKEY = document.getElementById("room-key").value;
        SOCKET.emit("JOIN-ROOM", ROOMKEY, () => {
            document.getElementById("init").innerHTML = "";
            document.getElementById("code").disabled = true;
            SOCKET.on("CODE-SERVE",codeUpdater);
        });
    }
}

const sendCode = () => {
    SOCKET.emit('PUSH-CODE', { ROOMKEY, code: document.getElementById("code").value });
}


const codeUpdater = code => {
    document.getElementById("code").value = code;
}




//set click listeners
document.getElementById("host-btn").addEventListener("click", btnClickHandler);
document.getElementById("join-btn").addEventListener("click", btnClickHandler);