
// Global Variables

let isPlayerOneTurn = true, gameWon = false;
let buttons = document.querySelectorAll(".cell");
let played = "", text = ""
let playCount = 0;
let values = [];

let winnings = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontal
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // vertical
    [0, 4, 8], [2, 4, 6] // diagonal
];



for (var i = 0; i < buttons.length; i++) {

    buttons[i].innerHTML = "";
    buttons[i].addEventListener("click", (e) => {

        if (gameWon)
        return;

        if (e.target.innerHTML == "") {

            playCount++;
            played = isPlayerOneTurn ? "X" : "O";
            values[Number(e.target.value)] = played;
            e.target.innerHTML = played;
            isPlayerOneTurn = !isPlayerOneTurn;
            if (playCount > 4) {
                if (!checkWinner() && playCount == 9) 
                    loadValues();
            }

        }

    });

}


function loadValues () {

    playCount = 0;
    values = [];
    gameWon = false;

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].innerHTML = "";
        buttons[i].style.backgroundColor = "antiquewhite";
    }

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
                    gameWon = true;
                    
                    buttons[one].style.backgroundColor = "lightgreen";
                    buttons[two].style.backgroundColor = "lightgreen";
                    buttons[three].style.backgroundColor = "lightgreen";
            
                    setTimeout(function() {    
                        loadValues();
                    }, 1500);

            return true;
        
        }

    }

    return false;

}
