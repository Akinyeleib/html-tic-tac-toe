
let isPlayerOneTurn = true;

let buttons = document.querySelectorAll(".cell");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].innerHTML = i;
    buttons[i].addEventListener("click", (e) => {
        e.target.innerHTML = "X";
    });
}

