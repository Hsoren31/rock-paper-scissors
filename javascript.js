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

let getComputerChoice = Math.random()
    if (getComputerChoice > 0.33){
        getComputerChoice = "Rock";
    } else if (getComputerChoice >= 0.67){
        getComputerChoice = "Paper";
    } else {
        getComputerChoice = "Scissors";
    }


console.log (getComputerChoice);

let computerSelection = getComputerChoice;

function playRound(playerSelection, computerSelection){
    if (playerSelection("")> computerSelection("")) {
        return "You won!";
    } else
        (playerSelection("") < computerSelection("")); {
        return "You lost.";
    }
}


console.log(playRound)