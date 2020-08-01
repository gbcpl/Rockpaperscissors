// This is the main game

const RPS = ["rock", "paper", "scissors"]
let computerSelection = "";
let playerSelection = "";
let final = "";

let userScore = parseInt(0);
let computerScore = parseInt(0);
let numberOfRound = 0;

function computerPlay() {
    return computerSelection = RPS[Math.floor(Math.random() * RPS.length)];
}

function playRound(final) {
        if (playerSelection === computerSelection) {
            return final = "This is a tie! ";
        }
        else if (playerSelection === "scissors" && computerSelection === "paper") {
            userScore++;
            goGreen();
            return final = "You win! Scissors win against paper ";
        }
        else if (playerSelection === "paper" && computerSelection === "scissors") {
            computerScore++;
            goRed();
            return final = "You lose! Scissors win against paper ";
        }
        else if (playerSelection === "rock" && computerSelection === "paper") {
            computerScore++;
            goRed();            
            return final = "You lose! Paper wins against rock ";
        }
        else if (playerSelection === "paper" && computerSelection === "rock") {
            userScore++;
            goGreen();
            return final = "You win! Paper wins against rock ";
        }
        else if (playerSelection === "scissors" && computerSelection === "rock") {
            computerScore++;
            goRed();            
            return final = "You lose! Rock wins against scissors ";
        }
        else if (playerSelection === "rock" && computerSelection === "scissors") {
            userScore++;
            goGreen();
            return final = "You win! Rock wins against scissors ";
        }
    }


// We listen to the buttons

const addRounds = document.querySelector("#rounds");

const scorePlayer = document.querySelector(".ScorePlayer");

const scoreComputer = document.querySelector(".ScoreComputer")

const addPlayerScore = document.getElementById("ScorePlayer");

const addComputerScore = document.getElementById("ScoreComputer");

const btns = document.querySelectorAll(".buttons");
btns.forEach((button) => {
    button.addEventListener("click", () => {
        
        if (numberOfRound < 5) {
            resetColors();
            
            numberOfRound++;
            computerPlay()
            playerSelection = button.id;

            const addChoice = document.createElement("div");
            addChoice.classList.add("roundsList");
            addChoice.textContent = "You played " + button.id + 
            " and computer played " + computerSelection + 
            " so... " + playRound(final);
            addRounds.appendChild(addChoice);

            addPlayerScore.innerHTML = userScore;
            addComputerScore.innerHTML = computerScore;

        } else if (numberOfRound = 5 && userScore > computerScore) {
            addRounds.textContent = "You won!";
            document.getElementById("reset").style.borderColor = "green";
            document.getElementById("reset").style.border = "solid 2px";
            document.getElementById("reset").style.color = "green";
            document.getElementById("rounds").style.borderColor= "green";
            goGreen();
            numberOfRound = 0;
            userScore = 0;
            computerScore = 0;

        } else if (numberOfRound = 5 && computerScore > userScore) {
            addRounds.textContent = "You lose!";
            document.getElementById("reset").style.borderColor = "red";
            document.getElementById("reset").style.border = "solid 2px";
            document.getElementById("reset").style.color = "red";
            document.getElementById("rounds").style.borderColor= "red";
            goRed();
            numberOfRound = 0;
            userScore = 0;
            computerScore = 0;

        } else if (numberOfRound = 5 && computerScore == userScore) {
            addRounds.textContent = "Tied!";
            document.getElementById("reset").style.borderColor = "blue";
            document.getElementById("reset").style.border = "solid 2px";
            document.getElementById("reset").style.color = "blue";
            document.getElementById("ScorePlayer").style.color = "blue";
            document.getElementById("ScoreComputer").style.color = "blue";
            document.getElementById("rounds").style.borderColor= "blue";
            numberOfRound = 0;
            userScore = 0;
            computerScore = 0;

        } 

}); 
});

const reset = document.querySelector("#reset");

reset.addEventListener("click", () => {
    document.getElementById("rounds").innerHTML = "";
    numberOfRound = 0;
    userScore = 0;
    computerScore = 0;
    addPlayerScore.innerHTML = userScore;
    addComputerScore.innerHTML = computerScore;
    resetColors();
});

const round = function() {
        playRound();
        return;
}

round();

// Colours

function goGreen() {
    document.getElementById("ScorePlayer").style.borderColor = "green";
    document.getElementById("ScorePlayer").style.border = "solid 2px";
    document.getElementById("ScorePlayer").style.color = "green";
}

function goRed() {
    document.getElementById("ScoreComputer").style.borderColor = "red";
    document.getElementById("ScoreComputer").style.border = "solid 2px";
    document.getElementById("ScoreComputer").style.color = "red";
}

function resetColors() {
    document.getElementById("reset").style.borderColor = "black";
    document.getElementById("reset").style.border = "solid 2px";
    document.getElementById("reset").style.color = "black";
    document.getElementById("ScorePlayer").style.borderColor = "black";
    document.getElementById("ScorePlayer").style.border = "solid 2px";
    document.getElementById("ScorePlayer").style.color = "black";
    document.getElementById("ScoreComputer").style.borderColor = "black";
    document.getElementById("ScoreComputer").style.border = "solid 2px";
    document.getElementById("ScoreComputer").style.color = "black";
    document.getElementById("rounds").style.borderColor= "rgb(135, 141, 141)";

}

