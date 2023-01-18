const Winner = {
    Tie: 0,
    Player: 1,
    Computer: 2
}

playGame();

function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();
        let winner = determineRoundWinner(playerChoice, computerChoice);
        if (winner === Winner.Tie) {
            console.log(`Tie! You both chose ${playerChoice}`);
        }

        else if (winner === Winner.Player) {
            playerScore++;
            console.log(`You win! ${playerChoice} beats ${computerChoice}`);
        }

        else {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
        }
        
        console.log(`Current Score:\n Player: ${playerScore} Computer: ${computerScore}`);
    }

    if (playerScore === computerScore) {
        console.log("Tie game!");
    }
    else if (playerScore > computerScore) {
        console.log("You win!");
    }
    else {
        console.log("Computer wins!");
    }

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

function getPlayerChoice() {
    let playerChoice = prompt("Enter your choice");
    playerChoice = playerChoice.toLowerCase().trim();
    while (playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors") {
        playerChoice = prompt("Invalid choice. Please enter either rock, paper, or scissors");
        playerChoice = playerChoice.toLowerCase().trim();
    }

    playerChoice = playerChoice.toLowerCase();
    playerChoice = playerChoice[0].toUpperCase() + playerChoice.slice(1);
    return playerChoice;
}