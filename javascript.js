const Winner = {
    Tie: 0,
    Player: 1,
    Computer: 2
}

let buttonContainer = document.getElementById("button-container");

for (let child of buttonContainer.children) {
    child.addEventListener("click", e => {
        playGame(e)
    });
}

let roundResult = document.getElementById("round-result");
let gameResult = document.getElementById("game-result");

let playerScore = 0;
let computerScore = 0;
let completed = false;

function playGame(e) {

    if (completed) {
        resetGame();
    }

    let playerChoice = e.target.textContent.trim();
    let computerChoice = getComputerChoice();
    let winner = determineRoundWinner(playerChoice, computerChoice);

    if (winner === Winner.Tie) {
        roundResult.textContent = `Tie round! You both chose ${playerChoice}`;
    }

    else if (winner === Winner.Player) {
        console.log("point hit");
        roundResult.textContent = `You win the round! ${playerChoice} beats ${computerChoice}`
        playerScore++;
    }

    else {
        roundResult.textContent = `You lose the round! ${computerChoice} beats ${playerChoice}`;
        computerScore++;
    }

    score.textContent = `Player: ${playerScore} Computer: ${computerScore}`;

    if (computerScore === 5 || playerScore === 5) {
        completed = true;
        if (playerScore > computerScore) {
            gameResult.textContent = "You Win The Game!";
        }

        else {
            gameResult.textContent = "Computer Wins The Game!";
        }
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    completed = false;
    gameResult.textContent = "";
    score.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
}

function determineRoundWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return Winner.Tie;
    }

    else if ((playerSelection === "Rock" && computerSelection == "Scissors") || (playerSelection === "Scissors" && computerSelection == "Paper") || (playerSelection === "Paper" && computerSelection == "Rock")) {
        return Winner.Player;
    }

    else {
        return Winner.Computer;
    }
}

function getComputerChoice() {
    let rand = Math.random();
    console.log(rand);
    if (rand < .33) {
        return "Rock";
    }
    else if (rand > .66) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}