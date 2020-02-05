var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

if (randomNumber1 == randomNumber2) {
    document.querySelector("h1").textContent = "Draw!";
}

else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "Player1 Wins!";
}
else {
    document.querySelector("h1").textContent = "Player2 Wins!";
}

document.getElementsByTagName("img")[0].setAttribute("src", "images/dice" + randomNumber1.toString() + ".png");
document.getElementsByTagName("img")[1].setAttribute("src", "images/dice" + randomNumber2.toString() + ".png");

