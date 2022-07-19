let computerPoints = 0;
let playerPoints = 0;
let computerSelection;
let playerSelection;

const narratorText = document.querySelector(".narrator-text");
const score = document.querySelector("#score");
const you = document.querySelector(".you");
const computer = document.querySelector(".computer");




//EventListeners
const rockButton = document.querySelector("#rock-Btn");
rockButton.addEventListener("click", function(){
    console.log("rock")
    computerPlay();
    playerSelection = "rock";
    playRound();
    updateScore();
});

const paperButton = document.querySelector("#paper-Btn");
paperButton.addEventListener("click", function(){
    console.log("paper")
    computerPlay();
    playerSelection = "paper";
    playRound();
    updateScore();
});

const scissorsButton = document.querySelector("#scissors-Btn");
scissorsButton.addEventListener("click", function(){
    console.log("scissors")
    computerPlay();
    playerSelection = "scissors";
    playRound();
    updateScore();
});

// computer select function
function computerPlay(){
    let computerChoices = ["rock", "paper", "scissors"];
    computerSelection = computerChoices[Math.floor(Math.random()*computerChoices.length)];
}
// Functions
function checkWinner(){
    if (playerPoints < 5 && computerPoints < 5){
    }else{
        declareWinner();
        playerPoints = 0;
        computerPoints = 0;
    }  
}
function updateScore(){
  score.innerText = `SCORE: ${playerPoints} / ${computerPoints}`;
  you.innerText = `Player Score:${playerPoints}`;
  computer.innerText =  `Computer Score:${computerPoints}`
}

function declareWinner() {
  if (playerPoints === 5){
    narratorText.innerText = "Congratulations you have won!! \nCan you win again?";
  } else if (computerPoints === 5){
    narratorText.innerText = "Darn, you lost... \nTry again";
  }
}

// play round
function playRound(){
    if (computerSelection === playerSelection) {
        narratorText.innerText = "That's a Tie.";
        checkWinner();
    }
    else if (computerSelection === "rock" && playerSelection === "scissors"){
        narratorText.innerText = "You lost.\nRock beats scissors.\nLets try again.";
        ++computerPoints;  
        checkWinner();
    }
    else if (computerSelection === "rock" && playerSelection === "paper"){
        narratorText.innerText = "Easy win!\nPaper beats rock.\nLet's go again!";
        ++playerPoints;  
        checkWinner();
    }
    else if (computerSelection === "paper" && playerSelection === "scissors"){
        narratorText.innerText = "Your win!\nScissors beat paper.";
        ++playerPoints;  
        checkWinner();
    }
    else if (computerSelection === "paper" && playerSelection === "rock"){
        narratorText.innerText = "Ouch, that's a loss.\n Paper beats rock\nGive it another try.";
        ++computerPoints;
        checkWinner();  
    }
    else if (computerSelection === "scissors" && playerSelection === "paper"){
        narratorText.innerText = "You lose...\nScissors beat paper\nLet's go again.";
        ++computerPoints;
        checkWinner();  
    }
    else if (computerSelection === "scissors" && playerSelection === "rock"){
        narratorText.innerText = "SMASH! Rock beats scissors.\nWell done!";
        ++playerPoints; 
        checkWinner(); 
    }
    else {
        narratorText.innerText = "Hmmm something went wrong.";
        checkWinner();
    }
}