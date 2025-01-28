function openPlayerConfig() {
    playerConfigOverlayElement.style.display = "block";
    backdropElement.style.display = "block";
}

function closePlayerConfig() {
    playerConfigOverlayElement.style.display = "none";
    backdropElement.style.display = "none";
}

function savePlayerConfig(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    // trim gets ride of extra whitespace in both sides of a string
    const enteredPlayerName = formData.get("playername").trim();

    // console.log(enteredPlayerName);
    if (!enteredPlayerName) {
        errorsOutputElement.textContent = "Please enter a valid name!";
        return;
    }
}