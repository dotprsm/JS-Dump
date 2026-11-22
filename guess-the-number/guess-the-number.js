const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let guess;

console.log("Guess the Number!");
console.log("I'm thinking of a number between 1 and 100.");

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askGuess() {
    rl.question("Enter your guess: ", (answer) => {
        guess = Number(answer);
        attempts++;

        if (isNaN(guess) || guess < 1 || guess > 100) {
            console.log("Please enter a number between 1 and 100!");
            attempts--;
            askGuess();
        } else if (guess < randomNumber) {
            console.log("Too low! Try again.");
            askGuess();
        } else if (guess > randomNumber) {
            console.log("Too high! Try again.");
            askGuess();
        } else {
            console.log(`Correct! You guessed it in ${attempts} attempts!`);
            rl.close();
        }
    });
}

askGuess();
