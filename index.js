let playerText = document.getElementsByClassName("player")[0];
let comp = document.getElementsByClassName("comp")[0];
let result = document.getElementsByClassName("result")[0];

function playRound(){
var player = prompt("Rock Paper Scissors");

var first = player.slice(0,1);
first = first.toUpperCase();

var second = player.slice(1, player.length);
 second = second.toLowerCase();

 let playerChoice = first + second;

 if(playerChoice !== "Rock" && playerChoice !== "Paper" && playerChoice !== "Scissors"){
    result.textContent = "Error: Player choice invalid";
 }

var computerChoice = Math.floor(Math.random() * 3) + 1;

switch (computerChoice){
    case 1:
        comp.textContent = "Rock";
        playerText.textContent = playerChoice;
        break;

    case 2:
        comp.textContent = "Paper";
        playerText.textContent = playerChoice;
        break;

    case 3:
        comp.textContent = "Scissors";
        playerText.textContent = playerChoice;
        break;
}

choices(playerChoice, computerChoice);

function choices(playerChoice, computerChoice){
    if(playerChoice === "Rock"){
        if(computerChoice === 1){
            result.textContent = "Tie";
        }
        if(computerChoice === 2){
            result.textContent = "Computer wins";
        }
        if(computerChoice === 3){
            result.textContent = "Player wins"
        }
    }
    else if(playerChoice === "Paper"){
        if(computerChoice === 1){
            result.textContent = "Player wins";
        }
        if(computerChoice === 2){
            result.textContent = "Tie";
        }
        if(computerChoice === 3){
            result.textContent = "Computer wins";
        }
    }else if(playerChoice === "Scissors"){
        if(computerChoice === 1){
            result.textContent = "Computer wins";
        }
        if(computerChoice === 2){
            result.textContent = "Player wins";
        }
        if(computerChoice === 3){
            result.textContent = "Tie";
        }
    }
}
}

playRound();