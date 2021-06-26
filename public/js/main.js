const btnClickHandler = event => {
    if (event.target.id === "host-btn")
        console.log("Host")
    if (event.target.id === "join-btn")
        console.log("Join")
}



//set click listeners
document.getElementById("host-btn").addEventListener("click", btnClickHandler);
document.getElementById("join-btn").addEventListener("click", btnClickHandler);