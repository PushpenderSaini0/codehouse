import { hostRoom, joinRoom } from './wsHandler.js';
import { initEditor, didEditorValueChange } from './editor.js';

const btnClickHandler = event => {
    if (event.target.id === "host-btn") {
        hostRoom();
        initEditor('HOST');
    }
    if (event.target.id === "join-btn") {
        joinRoom();
        initEditor('MEMBER');
    }
}


//set click listeners
document.getElementById("host-btn").addEventListener("click", btnClickHandler);
document.getElementById("join-btn").addEventListener("click", btnClickHandler);