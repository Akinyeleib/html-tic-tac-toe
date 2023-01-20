
let isPlayerOneTurn = true;

let buttons = document.querySelectorAll(".cell");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].innerHTML = "";
    buttons[i].addEventListener("click", (e) => {
        if (e.target.innerHTML == "") {
            e.target.innerHTML = isPlayerOneTurn ? "X" : "O";
            isPlayerOneTurn = !isPlayerOneTurn;
        } 
    });
}

