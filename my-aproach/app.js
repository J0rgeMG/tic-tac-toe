const newGameButtonElement = document.getElementById("new-game-button");

function startGame(boardArray){
    let gameOver = false;
    let player1Turn = true;
    let playerSymbol = "X";

    while(!gameOver){
        if(player1Turn){

        }else{

        }

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