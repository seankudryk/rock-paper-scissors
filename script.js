const container = document.querySelector("#container");
const playerScoreCounter = document.querySelector("#player-score");
const computerScoreCounter = document.querySelector("#computer-score");

let humanScore = 0;
let computerScore = 0;

container.addEventListener("click", (event) => {
    let target = event.target;

    function getHumanChoice() {
        switch(target.id) {
            case "rock-button":
                return "rock";
            case "paper-button":
                return "paper";
            case "scissors-button":
                return "scissors";
        }
    }
    playRound(getComputerChoice(), getHumanChoice());
    console.log(playerScoreCounter.value, computerScoreCounter.value);
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
    updateScores();
    console.log(`Player Score: ${humanScore} | Computer Score: ${computerScore}`);
}

function updateScores() {
    computerScoreCounter.textContent = computerScore;
    playerScoreCounter.textContent = humanScore;
    return;
}