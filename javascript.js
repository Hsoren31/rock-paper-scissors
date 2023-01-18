let playerSelection = prompt ("Rock, Paper or Scissors?");

let getComputerChoice = Math.random()
   if (getComputerChoice < 0.33) {
        getComputerChoice = "Rock";
    } else if (getComputerChoice <= 0.67) {
        getComputerChoice = "Paper";
    } else getComputerChoice = "Scissors";

console.log (getComputerChoice);