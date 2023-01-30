let playerSelection = prompt ("Rock, Paper or Scissors?",'');

    if (playerSelection.toLowerCase() == "rock"){
        playerSelection = "Rock";
    } else if (playerSelection.toLowerCase()== "paper"){
        playerSelection = "Paper";
    } else if(playerSelection.toLowerCase()== "scissors"){
        playerSelection = "Scissors";
    } else if (playerSelection.toLowerCase() != "rock" || "paper" || "scissors") {
        playerSelection = "Not a valid answer.";
    }

console.log(playerSelection)

function getComputerChoice() {
    return Math.random();
}

getComputerChoice();

let computerSelection = getComputerChoice();
    if (getComputerChoice() < 0.33) {
        computerSelection = "Rock";
    } else if (getComputerChoice() <= 0.66) {
        computerSelection = "Paper";
    } else {
        computerSelection = "Scissors"
    }

console.log (computerSelection);
