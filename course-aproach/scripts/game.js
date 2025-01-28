function startNewGame(){
    if (players[0].name === "" || players[1].name === ""){
        alert("Please ser custom player names before starting a new game");
        return;
    }

    gameAreaElement.style.display = "block";
}

function switchPlayer() {
    if (activePlayer === 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }
}

function selectGameField(event) {
    event.target.textContent = players[activePlayer].symbol; //active player changes every turn
    event.target.classList.add("disabled");
    switchPlayer();
}