let randomNumber;
let wrongGuessCount;

function resetGame() {
    randomNumber = parseInt(Math.random() * 100);
    wrongGuessCount = 0;
}

resetGame();

function checkGuess() {

    let number = parseInt(document.querySelector("input").value);


    if (number == randomNumber) {
        alert("congratulations! you are smart ;) and your wrong guesses: " + wrongGuessCount);
        resetGame();
    } else {
        if (number > randomNumber) {
            alert(" too big! try again");
            wrongGuessCount++;
        } else {
            alert(" too small!  try again");
            wrongGuessCount++;
        }
    }
}

// REFACTOR