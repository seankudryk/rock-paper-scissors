const rockButton = document.getElementById("rock-button");
const paperButton = document.getElementById("paper-button");
const scissorsButton = document.getElementById("scissors-button");
const startButton = document.getElementById("start-button");
//let playerInput;


function getComputerChoice() {
    let roll = Math.floor(Math.random() * 3);
    let play;
    
    if (roll === 0) {
        play = "rock";
    } else if (roll === 1) {
        play = "paper";
    } else {
        play = "scissors";
    }
    return play;
}

startButton.addEventListener("click", function () {
        let playerInput = prompt("Rock, Paper, or Scissors? (Please enter choice in lowercase, ie: rock)");
        

        if (playerInput !== "rock" && playerInput !== "paper" && playerInput !== "scissors") {
            alert("Please enter either 'rock', 'paper', or 'scissors'");
            return;
        } else if (playerInput === "rock") {
            alert("You entered rock!");
        } else if (playerInput === "paper") {
            alert("You entered paper!");
        } else {
            alert("You entered scissors!");
        }
});