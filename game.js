function getComputerChoice() {
    let array = ['Rock', 'Paper', 'Scissor'];
    let result = array[Math.floor(Math.random()*array.length)];
    return result;
}


let playerSelection = 'Rock';
let computerSelection = getComputerChoice();


function playRound(playerSelection, computerSelection) {
    let playerScore = 0;
    let computerScore = 0;
    if(playerSelection === computerSelection){
        return 0;
    }
    else if(playerSelection === 'ROCK' && computerSelection === 'PAPER'){
        return "You lose! Paper beats Rock";
    }
    else if(playerSelection === 'PAPER' && computerSelection === 'SCISSOR'){
        return "You lose! Scissor beats Paper";
    }
    else if(playerSelection === 'SCISSOR' && computerSelection==='ROCK'){
        return "You lose! Rock beats Scissor";
    }
    else{
        return 1;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let i=0;
    while(i<5){
        let result = playRound(playerSelection.toUpperCase(), computerSelection.toUpperCase());
        if(result === 1){
            playerScore++;
        }
        else if(result === 0){
            continue;
        }
        else {
            computerScore++;
        }
        console.log(playerScore);
        console.log(computerScore);
        i++;
    }

    
    if(playerScore > computerScore){
        return "Player Wins";
    }
    else if(playerScore === computerScore){
        return "Tied";
    }
    else {
        return "Computer Wins";
    }
}

console.log(game());