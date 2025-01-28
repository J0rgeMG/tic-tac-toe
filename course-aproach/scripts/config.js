function openPlayerConfig(event) {
    editedPlayer = +event.target.dataset.playerid; // +"1" => 1
    playerConfigOverlayElement.style.display = "block";
    backdropElement.style.display = "block";
}

function closePlayerConfig() {
    playerConfigOverlayElement.style.display = "none";
    backdropElement.style.display = "none";
    formElement.firstElementChild.classList.remove("error");
    errorsOutputElement.textContent = "";
    formElement.firstElementChild.lastElementChild.value = ""
}

function savePlayerConfig(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    // trim gets ride of extra whitespace in both sides of a string
    const enteredPlayerName = formData.get("playername").trim();

    // stops the player to enter an emplty string as a name
    // console.log(enteredPlayerName);
    if (!enteredPlayerName) {
        event.target.firstElementChild.classList.add("error");
        errorsOutputElement.textContent = "Please enter a valid name!";
        return;
    }

    const updatedPlayerDataElement = document.getElementById("player-" + editedPlayer + "-data");
    updatedPlayerDataElement.children[1].textContent = enteredPlayerName;

    players[editedPlayer - 1].name = enteredPlayerName;

    closePlayerConfig();
}