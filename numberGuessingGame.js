var guessNumber = Math.random() * 3;
var roundNumber = Math.floor(guessNumber);
console.log("computer Number is = ", roundNumber);
console.log("Your Guessing Number is = 1 ");
if (roundNumber == 1) {
    console.log("Congratulations.... You Won");
}
else {
    console.log("You Loss... Try Again");
}
