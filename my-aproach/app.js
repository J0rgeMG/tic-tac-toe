const newGameButtonElement = document.getElementById("new-game-button");

function newGame(){
    const boardElment = document.getElementById("game-board-section");
    const squaresBoardArray = document.querySelectorAll("#game-board li");

    //clears the board
    for(square of squaresBoardArray){
        square.innerHTML = "&nbsp;";
    }

    //shows the board
    boardElment.classList.remove("hidden");
}

newGameButtonElement.addEventListener("click", newGame);