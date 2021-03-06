const choices = document.querySelectorAll(".choice");
const score = document.getElementById("score");
const result = document.getElementById("result");
const restart = document.getElementById("restart");
const modal = document.querySelector(".modal");
const scoreboard = {
    player: 0,
    computer: 0,
};

// Play game
function play(event) {
    const playerChoice = event.target.id;
    const computerChoice = computerPlay();
    const winner = playRound(playerChoice, computerChoice);
    announceWinner(winner, computerChoice);
    final();
}

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

function announceWinner(winner, computerChoice) {
    if (winner === "player") {
        // Increment player score
        scoreboard.player++;
        // Show modal result
        result.innerHTML = `<h2 class="text-win">You Win</h2>
        <img class="modalIcon"
        src="assets/images/${computerChoice}.png"/>
      <p>Computer Chose <b>${
          computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
      }</b></p>`;

        if (scoreboard.player === 5) {
            restart.addEventListener("click", restartGame);
        }
    } else if (winner === "computer") {
        // Increment computer score
        scoreboard.computer++;
        // Show modal result
        result.innerHTML = `<h2 class="text-lose">You Lose</h2>
        <img class="modalIcon"
        src="assets/images/${computerChoice}.png"/>
      <p>Computer Chose <b>${
          computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
      }</b></p>`;
    } else {
        result.innerHTML = `<h2>It's a Draw</h2>
        <img class="modalIcon"
        src="assets/images/${computerChoice}.png"/>
      <p>Computer Chose <b>${
          computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
      }</b></p>`;
    }
    // Show score
    score.innerHTML = `<p>Player: ${scoreboard.player}</p>
  <p>Computer: ${scoreboard.computer}</p>`;

    modal.style.display = "block";
}

// Final result after 5 rounds
function final() {
    if (scoreboard.player === 5) {
        result.innerHTML = `
          <h3 class="final-text-win">You scored 5 and won the session.<br><br> Congrats!</h3>
          <button id="restart" class="restart-btn-modal" value="Reload Page" onClick="document.location.reload(true)">Restart Session</button>
      `;
        window.addEventListener("click", stickModal);
        function stickModal(x) {
            if (x.target === modal) {
                modal.style.display = "block";
            }
        }
    } else if (scoreboard.computer === 5) {
        result.innerHTML = `
          <h3 class="final-text-lose">Computer won the session.<br><br> Better luck next time!</h3>
          <button id="restart" class="restart-btn-modal" value="Reload Page" onClick="document.location.reload(true)">Restart Session</button>
      `;
        window.addEventListener("click", stickModal);
        function stickModal(x) {
            if (x.target === modal) {
                modal.style.display = "block";
            }
        }
    }
}

// Clear modal
function clearModal(e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
}

// Restart game
function restartGame() {
    scoreboard.player = 0;
    scoreboard.computer = 0;
    score.innerHTML = `<p>Player: 0</p>
  <p>Computer: 0</p>`;
}

module.exports = {
    play,
    computerPlay,
    playRound,
    restartGame,
    clearModal,
    announceWinner,
};
