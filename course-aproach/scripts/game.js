function startNewGame(){
    if (players[0].name === "" || players[1].name === ""){
        alert("Please ser custom player names before starting a new game");
        return;
    }

    gameAreaElement.style.display = "block";
}