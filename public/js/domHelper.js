const safe = str => {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

export const displayRoomKey = (key) => {
    document.getElementById('room-key-display').innerHTML = "Room Key : " + safe(key);
}
