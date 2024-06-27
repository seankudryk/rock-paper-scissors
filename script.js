const rockButton = document.getElementById("rock-button");
const paperButton = document.getElementById("paper-button");
const scissorsButton = document.getElementById("scissors-button");
const startButton = document.getElementById("start-button");
let humanScore = 0;
let computerScore = 0;


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

function getHumanChoice() {
    let playerInput = prompt("Rock, Paper, or Scissors?");
    playerInput = playerInput.toLowerCase();

    if (playerInput !== "rock" && playerInput !== "paper" && playerInput !== "scissors") {
        alert("Please enter either 'rock', 'paper', or 'scissors'");
        return;
    } else {
        return playerInput; 
    }
}

function playRound(computerChoice, humanChoice) {
    if (computerScore === 5) {
        console.log("Computer Wins! Try again next time!");
        humanScore = 0;
        computerScore = 0;
    } else if (humanScore === 5){
        console.log("You Win! Congrats on winning this game of pure luck!");
        humanScore = 0;
        computerScore = 0;
    } else {
        if (humanChoice === "rock") {
            if (computerChoice === "paper") {
                computerScore += 1;
                console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
            } else if (computerChoice === "scissors") {
                humanScore += 1;
                console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
            } else {
                console.log(`It's a tie! Both players picked ${humanChoice}.`);
            }
        }   
        else if (humanChoice === "paper") {
            if (computerChoice === "scissors") {
                computerScore += 1;
                console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
            } else if (computerChoice === "rock") {
                humanScore += 1;
                console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
            } else {
                console.log(`It's a tie! Both players picked ${humanChoice}.`);
            }
        } 
        else {
            if (computerChoice === "rock") {
                computerScore += 1;
                console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
            } else if (computerChoice === "paper") {
                humanScore += 1;
                console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
            } else {
                console.log(`It's a tie! Both players picked ${humanChoice}.`);
            }
        }
        console.log(`Player Score: ${humanScore} | Computer Score: ${computerScore}`);
    }
};

const computerChoice = getComputerChoice();
const humanChoice = getHumanChoice();


startButton.addEventListener("click", function () {
    playRound(getComputerChoice(), getHumanChoice());
});