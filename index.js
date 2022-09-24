var randomNumber1 = Math.trunc(Math.random() * 6) + 1;
var diceImg1 = "images/dice" + randomNumber1 + ".png";

document.querySelector(".img1").setAttribute("src", diceImg1);

var randomNumber2 = Math.trunc(Math.random() * 6) + 1;
var diceImg2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src", diceImg2);

if (randomNumber1 > randomNumber2) {
    document.querySelector(".container h1").textContent = "🚩Player 1 Wins";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector(".container h1").textContent = "Player 2 Wins🚩";
}
else {
    document.querySelector(".container h1").textContent = "Draw !";
}