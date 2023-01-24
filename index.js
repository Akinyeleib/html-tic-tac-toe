
// GLobal Variables

let winnings = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontal
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // vertical
    [0, 4, 8], [2, 4, 7] // diagonal
];

let isPlayerOneTurn = true;

let buttons = document.querySelectorAll(".cell");

let played = "";
let values = [];
let text = ""
let playCount = 0;


for (var i = 0; i < buttons.length; i++) {
    buttons[i].innerHTML = "";
    buttons[i].addEventListener("click", (e) => {
        if (e.target.innerHTML == "") {
            playCount++;
            played = isPlayerOneTurn ? "X" : "O";
            values[Number(e.target.value)] = played;
            e.target.innerHTML = played;
            isPlayerOneTurn = !isPlayerOneTurn;
            console.log(values);
            // console.log(e.target.value);
            if (playCount == 9) 
                loadValues();
        }
    });
}

function loadValues () {
    console.log('hello');
    for (var i = 0; i < buttons.length; i++) {
        console.log(buttons[i].innerHTML);
    }
}
