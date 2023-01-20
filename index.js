
let isPlayerOneTurn = true;

let buttons = document.querySelectorAll(".cell");

let played = [];
let text = ""

for (var i = 0; i < buttons.length; i++) {
    buttons[i].innerHTML = "";
    buttons[i].addEventListener("click", (e) => {
        if (e.target.innerHTML == "") {
            played = isPlayerOneTurn ? "X" : "O";
            e.target.innerHTML = played;
            isPlayerOneTurn = !isPlayerOneTurn;
        }
    });
}

