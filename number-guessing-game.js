function runGame() {
    const target= Math.floor(Math.random() * 100) + 1;
    let guessString = '';
    let guessNumber = 0;
    let correct= false;
    let numTries = 0;

    do {
        guessString = Number(prompt("Please choose a number between 1 and 100"));
        if (guessString === null) {
            return;
        }
        
        guessNumber = +guessString;
        numTries++;
        correct = checkGuess(guessNumber, target);

        } while (!correct);
     
    
    alert("You have guessed correctly after " + numTries + " tries!");

    function checkGuess(guessNumber, target) {
        let correct = false
        if (isNaN(guessNumber)) {
            alert("You did not enter a number");
        } else if ((guessNumber < 1) || (guessNumber > 100)) {
            alert("This number is out of the specified range");
        } else if (guessNumber > target) {
            alert("Your guess is too high")
        } else if (guessNumber < target) {
            alert("Your guess is too low")
        } else {
        correct = true;
        }
        return correct;
    }
}

