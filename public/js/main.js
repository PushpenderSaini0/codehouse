import { hostRoom, joinRoom } from './wsHandler.js';
import { initEditor, getEditorValue } from './editor.js';
import { downloadAsFile } from './downloadAsFileHelper.js';

const btnClickHandler = event => {
    if (event.target.id === "host-btn") {
        hostRoom();
        initEditor('HOST');
        //force-height-bug-fix
        const h = document.body.clientHeight - 50;
        document.getElementById("code").setAttribute("style", `height:${h}px`);
    }
    if (event.target.id === "join-btn") {
        joinRoom();
        initEditor('MEMBER');
        //force-height-bug-fix
        const h = document.body.clientHeight - 50;
        document.getElementById("code").setAttribute("style", `height:${h}px`);
    }
    if (event.target.id === "download-file-btn") {
        downloadAsFile(getEditorValue(), "codehouse.js");
    }
}

//set click listeners
document.getElementById("download-file-btn").addEventListener("click", btnClickHandler);
document.getElementById("host-btn").addEventListener("click", btnClickHandler);
document.getElementById("join-btn").addEventListener("click", btnClickHandler);