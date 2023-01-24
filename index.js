
// GLobal Variables

let winnings = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontal
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // vertical
    [0, 4, 8], [2, 4, 6] // diagonal
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
            if (playCount > 4) {
                checkWinner();
            }
            if (playCount == 9) 
                loadValues();
        }
    });
}

function loadValues () {
    playCount = 0;
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].innerHTML = "";
    }
    values = [];
}

function checkWinner() {
    
    for (var i = 0; i < winnings.length; i++) {
        post = winnings[i];

        var one = post[0];
        var two = post[1];
        var three = post[2];
        
        if (values[one] == played 
            && values[two] == played 
                && values[three] == played) {
                    console.log("Winner!");
                    loadValues();
                    buttons[one].style.backgroundColor = "lightgreen";
                    buttons[two].style.backgroundColor = "lightgreen";
                    buttons[three].style.backgroundColor = "lightgreen";
                    return true;
        }
    }
    return false;
}
