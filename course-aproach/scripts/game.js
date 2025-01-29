function startNewGame(){
    if (players[0].name === "" || players[1].name === ""){
        alert("Please ser custom player names before starting a new game");
        return;
    }

    activePlayerNameElement.textContent = players[activePlayer].name;
    gameAreaElement.style.display = "block";
}

function switchPlayer() {
    if (activePlayer === 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }

    activePlayerNameElement.textContent = players[activePlayer].name;
}

function selectGameField(event) {
    if (event.target.tagName !== "LI") {
        return;
    }

    const selectedField = event.target;
    const selectedColumn = selectedField.dataset.col - 1;
    const selectedRow = selectedField.dataset.row - 1;

    if (gameData[selectedRow][selectedColumn] > 0) {
        alert("Please select an empty field!");
        return;
    }

    selectGameField.textContent = players[activePlayer].symbol; //active player changes every turn
    selectGameField.classList.add("disabled");


    gameData[selectedRow][selectedColumn] = activePlayer + 1;

    switchPlayer();
}