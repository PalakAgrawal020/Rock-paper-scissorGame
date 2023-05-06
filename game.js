function getComputerChoice() {
    let array = ['Rock', 'Paper', 'Scissor'];
    let result = array[Math.floor(Math.random()*array.length)];
    return result;
}

function round(playerSelection, computerSelection) {
    if(playerSelection == computerSelection){
        return "It's a tie";
    }
    if(playerSelection == 'ROCK'){
        if(computerSelection == 'PAPER'){
            return "You lose! Paper beats Rock";
        }
        else if(computerSelection == 'SCISSOR'){
            return "You win! Rock beats Scissor";
        }
    }
    if(playerSelection == 'PAPER'){
        if(computerSelection == 'ROCK'){
            return "You win! Paper beats Rock";
        }
        else if(computerSelection == 'SCISSOR'){
            return "You lose! Scissor beats Paper";
        }
    }
    if(playerSelection == 'SCISSOR'){
        if(computerSelection == 'ROCK'){
            return "You lose! Rock beats Scissor";
        }
        else if(computerSelection == 'PAPER'){
            return "You win! Scissor beats Paper";
        }
    }
}

let playerSelection = 'ROck';
let computerSelection = getComputerChoice();
console.log(round(playerSelection.toUpperCase(), computerSelection.toUpperCase()));