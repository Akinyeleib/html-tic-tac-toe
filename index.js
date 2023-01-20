
let buttons = document.querySelectorAll(".cell");

// alert("Length is: " + buttons.length);

for (var i = 0; i < buttons.length; i++) {
    // console.log(buttons[i].innerHTML);
    buttons[i].innerHTML = i;
}
