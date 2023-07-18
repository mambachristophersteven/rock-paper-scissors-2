

let displayPlayerInfo = document.getElementById("playerInfo");
let displayUserChoice = document.getElementById("userChoice");
let displayComputerChoice = document.getElementById("computerChoice");
let displayGameOutcome = document.getElementById("gameOutcome");
let randomIndex;
let computerChoiceIndex;
let userChoice = "";
let computerChoice = "";
let player = {
    name : "",
    credit : 20
}
player.name = prompt("What is your name?");

displayPlayerInfo.textContent = player.name + ": $" + player.credit;

function getComputerChoice(){
    randomIndex = Math.floor(Math.random()*3) + 1;
    if(randomIndex === 1){
        computerChoiceIndex = "Rock";
    }
    else if(randomIndex ===2){
        computerChoiceIndex = "Paper";
    }
    else{
        computerChoiceIndex = "Scissors";
    }
    return computerChoiceIndex;

}

computerChoice = getComputerChoice();

function rock(){
    userChoice = "Rock";
    displayUserChoice.textContent = player.name + "'s Choice: " + userChoice;
    displayComputerChoice.textContent =  "Computer's Choice: " + computerChoice;

    console.log("computer choice: " + computerChoice);
    if(computerChoice === "Rock" ){
        displayGameOutcome.textContent = "you drew!! ";
    }
    else if(computerChoice === "Paper"){
        displayGameOutcome.textContent = "you lost!! ";
    }
    else{
        displayGameOutcome.textContent = "you won!! ";
    }
    computerChoice = getComputerChoice();
}

function paper(){
    userChoice = "Paper";
    displayUserChoice.textContent = player.name + "'s Choice: " + userChoice;
    displayComputerChoice.textContent = "Computer's Choice: " + computerChoice;
    if(computerChoice === "Rock" ){
        displayGameOutcome.textContent = "you won!! ";
    }
    else if(computerChoice === "Paper"){
        displayGameOutcome.textContent = "you drew!! ";
    }
    else{
        displayGameOutcome.textContent = "you lost!! ";
    }
    computerChoice = getComputerChoice();
}

function scissors(){
    userChoice = "Scissors";
    displayUserChoice.textContent = player.name + "'s Choice: " + userChoice;
    displayComputerChoice.textContent = "Computer's Choice: " + computerChoice;
    if(computerChoice === "Rock" ){
        displayGameOutcome.textContent = "you lost!! ";
    }
    else if(computerChoice === "Paper"){
        displayGameOutcome.textContent = "you won!! ";
    }
    else{
        displayGameOutcome.textContent = "you drew!! ";
    }
    computerChoice = getComputerChoice();
    
}








