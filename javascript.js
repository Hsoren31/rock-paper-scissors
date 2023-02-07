function game() {

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

    console.log(playerSelection);

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
            computerSelection = "Scissors";
        }
    
    console.log(computerSelection);

    function playRound(playerSelection, computerSelection) {
        if (playerSelection == "Rock" && computerSelection == "Scissors") {
            return "You Won! Rock beats Scissors.";
        } else if (playerSelection == "Rock" && computerSelection == "Paper") {
            return "You Lose. Paper beats Rock.";
        } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
            return "You Lose. Rock beats Scissors.";
        } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
            return "You Won! Scissors beats Paper.";
        } else if (playerSelection == "Paper" && computerSelection == "Rock") {
            return "You Won! Paper beats Rock.";
        } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
            return "You Lose. Scissors beats Paper.";
        } else {return "It's a tie."}
    }
    console.log(playRound(playerSelection, computerSelection));
}
    for (let i = 0; i < 4; i++){
        game();
    }
    console.log(game());