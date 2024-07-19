const container = document.querySelector("#container");
const playerScoreCounter = document.querySelector("#player-score");
const computerScoreCounter = document.querySelector("#computer-score");
const computerChoiceAnnouncer = document.querySelector("#computer-choice-announcer");
const roundSummary = document.querySelector("#round-summary");
const playAgainContainer = document.querySelector("#play-again-container");
const playAgainButton = document.querySelector("#play-again-button");
const playAgainText = document.querySelector("#play-again-text");
const mainContainer = document.querySelector(".main-container");
const buttonContainer = document.querySelector("#container");

let humanScore = 0;
let computerScore = 0;

container.addEventListener("click", (event) => {
    let target = event.target;

    function getHumanChoice() {
        switch(target.id) {
            case "rock-button":
                return "Rock";
            case "paper-button":
                return "Paper";
            case "scissors-button":
                return "Scissors";
        }
    }
    playRound(getComputerChoice(), getHumanChoice());
})

function getComputerChoice() {
    let roll = Math.floor(Math.random() * 3);
    let play;
    
    if (roll === 0) {
        play = "Rock";
    } else if (roll === 1) {
        play = "Paper";
    } else {
        play = "Scissors";
    }
    return play;
} 


function playRound(computerChoice, humanChoice) {
    computerChoiceAnnouncer.textContent = `Computer chooses ${computerChoice}`;
    if (humanChoice === "Rock") {
        if (computerChoice === "Paper") {
            computerScore += 1;
            roundSummary.textContent = `You lose! ${computerChoice} beats ${humanChoice}!`;
        } else if (computerChoice === "Scissors") {
            humanScore += 1;
            roundSummary.textContent = `You win! ${humanChoice} beats ${computerChoice}!`;
        } else {
            roundSummary.textContent = `It's a tie! Both players picked ${humanChoice}.`;
        }
    }   
    else if (humanChoice === "Paper") {
        if (computerChoice === "Scissors") {
            computerScore += 1;
            roundSummary.textContent = `You lose! ${computerChoice} beats ${humanChoice}!`;
        } else if (computerChoice === "Rock") {
            humanScore += 1;
            roundSummary.textContent = `You win! ${humanChoice} beats ${computerChoice}!`;
        } else {
            roundSummary.textContent = `It's a tie! Both players picked ${humanChoice}.`;
        }
    } 
    else {
        if (computerChoice === "Rock") {
            computerScore += 1;
            roundSummary.textContent = `You lose! ${computerChoice} beats ${humanChoice}!`;
        } else if (computerChoice === "Paper") {
            humanScore += 1;
            roundSummary.textContent = `You win! ${humanChoice} beats ${computerChoice}!`;
        } else {
            roundSummary.textContent = `It's a tie! Both players picked ${humanChoice}.`;
        }
    }
    checkForWin();
    updateScores();
}

function checkForWin() {
    if (humanScore === 5) {
        console.log("Congratulations! You have won the match!");
        playAgainText.textContent = "Congratulations! You have won the match!";
        resetGame();
    } else if (computerScore === 5) {
        console.log("You've lost the match to the computer. You suck!");
        playAgainText.textContent = "You've lost the match to the computer. Better luck next time!";
        resetGame();
    }
}

function updateScores() {
    computerScoreCounter.textContent = computerScore;
    playerScoreCounter.textContent = humanScore;
    return;
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    playAgainContainer.style.display = "flex";
    mainContainer.classList.toggle("fade-out");
    buttonContainer.style.display = "none";
}

playAgainButton.addEventListener("click", () => {
    playAgainContainer.style.display = "none";
    mainContainer.classList.toggle("fade-out");
    buttonContainer.style.display = "flex";
})

