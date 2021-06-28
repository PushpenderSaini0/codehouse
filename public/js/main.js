import { hostRoom, joinRoom } from './wsHandler.js';
import { initEditor } from './editor.js';

const btnClickHandler = event => {
    if (event.target.id === "host-btn") {
        hostRoom();
        initEditor('HOST');
        //force-height-bug-fix
        const h = document.body.clientHeight - 50 ;
        document.getElementById("code").setAttribute("style", `height:${h}px`);
    }
    if (event.target.id === "join-btn") {
        joinRoom();
        initEditor('MEMBER');
        //force-height-bug-fix
        const h = document.body.clientHeight - 50 ;
        document.getElementById("code").setAttribute("style", `height:${h}px`);
    }
}

//set click listeners
document.getElementById("host-btn").addEventListener("click", btnClickHandler);
document.getElementById("join-btn").addEventListener("click", btnClickHandler);