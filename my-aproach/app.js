const newGameButtonElement = document.getElementById("new-game-button");
let player1Turn = true;
let playerSymbol = "X";
let gameOver = false;

function squareChosen() {
    if (player1Turn){
        EventTarget.innerHTML = playerSymbol;
        EventTarget.classList.add("selected");
        playerSymbol = "O"
        player1Turn = false;
    } else {
        EventTarget.innerHTML = playerSymbol;
        EventTarget.classList.add("selected");
        playerSymbol = "X"
        player1Turn = true;
    }
}

function startGame(boardArray){
    for (square of boardArray) {
        square.addEventListener("click", squareChosen);
    }
}

function newGame(){
    //select elements needed
    const boardElment = document.getElementById("game-board-section");
    const squaresBoardArray = document.querySelectorAll("#game-board li");

    //clears the board
    for (square of squaresBoardArray) {
        square.innerHTML = "&nbsp;";
    }

    //shows the board
    boardElment.classList.remove("hidden");

    //starts the gameplay
    startGame(squaresBoardArray);
}

newGameButtonElement.addEventListener("click", newGame);