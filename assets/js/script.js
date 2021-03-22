const choices = document.querySelectorAll(".choice");

// Event listener for player choice
choices.forEach((choice) => choice.addEventListener("click", play));

// Get computers choice
function computerPlay() {
    let choices = ["rock", "paper", "scissors"];
    const randomNum = Math.floor(Math.random() * 3); // generates a random number from 0 to 2
    return choices[randomNum]; //choices[0] is rock, choices[1] is paper and choices[3] is scissors
}

// Results from game round
let playerSelection;
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "draw";
    } else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return "computer";
        } else {
            return "player";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            return "computer";
        } else {
            return "player";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return "computer";
        } else {
            return "player";
        }
    }
}
