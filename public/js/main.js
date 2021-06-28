import { hostRoom, joinRoom } from './wsHandler.js';

const btnClickHandler = event => {
    if (event.target.id === "host-btn") {
        hostRoom();
    }
    if (event.target.id === "join-btn") {
        joinRoom();
    }
}

//set click listeners
document.getElementById("host-btn").addEventListener("click", btnClickHandler);
document.getElementById("join-btn").addEventListener("click", btnClickHandler);