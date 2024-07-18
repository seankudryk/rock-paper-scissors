let container = document.querySelector("#container");

let humanScore = 0;
let computerScore = 0;

container.addEventListener("click", (event) => {
    let target = event.target;

    function getHumanChoice() {
        switch(target.id) {
            case "rock-button":
                console.log("rock-button");
                return "rock";
            case "paper-button":
                console.log("paper-button");
                return "paper";
            case "scissors-button":
                console.log("scissors-button");
                return "scissors";
        }
    }

    playRound(getComputerChoice(), getHumanChoice());
})

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
    return playerInput.toLowerCase(); 
}

function playRound(computerChoice, humanChoice) {
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

function playGame(rounds) {
    while (humanScore < rounds && computerScore < rounds) {
        playRound(getComputerChoice(), getHumanChoice());
    }

    if (humanScore === 10) {
        console.log("Congratulations! You won the match!");
    } else {
        console.log("YOU'RE A LOSER, THE COMPUTER WON THE ENTIRE MATCH YOU LOSER!!!");
    }
}