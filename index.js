
// GLobal Variables

let winnings = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontal
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // vertical
    [0, 4, 8], [2, 4, 7] // diagonal
];

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


