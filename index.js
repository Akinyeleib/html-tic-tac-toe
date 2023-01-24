
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
            // console.log(values);
            // console.log(e.target.value);
            if (playCount > 4) {
                checkWinner();
            }
            if (playCount == 9) 
                loadValues();
        }
    });
}

function loadValues () {
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].innerHTML = "";
    }
}

function checkWinner() {
    
    for (post in winnings) {
        
        console.log(post);
        var one = post[0];
        var two = post[1];
        var three = post[2];
        if (values[one] == played 
            && values[two] == played 
                && values[three] == played) {
                    console.log("Winner!");
                    loadValues();
                }
    }
    return false;
}
