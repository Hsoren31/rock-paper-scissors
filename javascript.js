function game() {
    let playerScore =0;
    let computerScore =0;
    while (playerScore < 5 && computerScore < 5){
    let playerSelection = prompt ("Rock, Paper or Scissors?",'');
        if (playerSelection.toLowerCase() == "rock"){
            playerSelection = "Rock";
        } else if (playerSelection.toLowerCase()== "paper"){
            playerSelection = "Paper";
        } else if(playerSelection.toLowerCase()== "scissors"){
            playerSelection = "Scissors";
        } else if (playerSelection.toLowerCase() != "rock" || "paper" || "scissors" || null) {
            playerSelection = "Not a valid answer.";
        }

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

    function playRound(playerSelection, computerSelection) {
        if (playerSelection == "Rock" && computerSelection == "Scissors" || playerSelection == "Scissors" && computerSelection == "Paper" || playerSelection == "Paper" && computerSelection == "Rock"){
            playerScore++;
            return `You Win! ${playerSelection} beats ${computerSelection}.`;
        } else if (playerSelection == "Rock" && computerSelection == "Paper" || playerSelection == "Scissors" && computerSelection == "Rock" || playerSelection == "Paper" && computerSelection == "Scissors") {
            computerScore++;
            return `You Lose. ${computerSelection} beats ${playerSelection}`;
        } else if (playerSelection === computerSelection){
            return "It's a tie.";
        } else {return "Try again."}
    }
        console.log(playRound(playerSelection, computerSelection));
        console.log(playerScore);
        console.log(computerScore);

    function winGame(playerScore,computerScore) {
        if(playerScore===5){
            return "You won the game. Congratulations!";
        } else if(computerScore===5){
            return "You lost the game. Better luck next time.";
        }
    }
    console.log(winGame(playerScore,computerScore));
}
}
    game();
