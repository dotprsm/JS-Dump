const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function play() {
    const choices = ["rock", "paper", "scissors"];

    const computerChoice = choices[Math.floor(Math.random() * 3)];

    rl.question("Choose rock, paper, or scissors: ", (playerChoice) => {
        playerChoice = playerChoice.toLowerCase();

        if (!choices.includes(playerChoice)) {
            console.log("Invalid choice! Try again.");
            return play();
        }

        console.log("You chose: " + playerChoice);
        console.log("Computer chose: " + computerChoice);

        if (playerChoice === computerChoice) {
            console.log("It's a tie!");
        } 
        else if (
            (playerChoice === "rock" && computerChoice === "scissors") ||
            (playerChoice === "paper" && computerChoice === "rock") ||
            (playerChoice === "scissors" && computerChoice === "paper")
        ) {
            console.log("You win!");
        } 
        else {
            console.log("You lose!");
        }

        rl.question("Play again? (yes/no): ", (answer) => {
            if (answer.toLowerCase() === "yes") {
                play();
            } else {
                console.log("Thanks for playing!");
                rl.close();
            }
        });
    });
}

play();
