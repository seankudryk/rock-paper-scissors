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
        startButton.style.color = "red";
        let playerInput = prompt("Rock, Paper, or Scissors");
});