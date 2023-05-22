function getComputerChoice() {
    let array = ['ROCK', 'PAPER', 'SCISSOR'];
    let result = array[Math.floor(Math.random()*array.length)];
    return result;
}


let playerSelection1 = 'ROCK';
let playerSelection2 = 'PAPER';
let playerSelection3 = 'SCISSOR';


let computerSelection = getComputerChoice();


function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection){
        console.log("It's a tie");
    }
    else if(playerSelection === 'ROCK' && computerSelection === 'PAPER'){
        console.log("You lose! Paper beats Rock");
    }
    else if(playerSelection === 'PAPER' && computerSelection === 'SCISSOR'){
        console.log("You lose! Scissor beats Paper");
    }
    else if(playerSelection === 'SCISSOR' && computerSelection==='ROCK'){
        console.log("You lose! Rock beats Scissor");
    }
    else{
        console.log("You win");
    }
}


const buttons = document.querySelectorAll('.btn');
console.log(buttons);
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.value, computerSelection);
    });
});


// const button1 = document.querySelector('#btn1');
// button1.addEventListener('click', playRound(playerSelection1, computerSelection));


// const button2 = document.querySelector('#btn2');
// button2.addEventListener('click', playRound(playerSelection2, computerSelection));


// const button3 = document.querySelector('#btn3');
// button3.addEventListener('click', playRound(playerSelection3, computerSelection));


// function game() {
//     let playerScore = 0;
//     let computerScore = 0;
//     let i=0;
//     while(i<5){
//         let result = playRound(playerSelection.toUpperCase(), computerSelection.toUpperCase());
//         if(result === 1){
//             playerScore++;
//         }
//         else if(result === 0){
//             continue;
//         }
//         else {
//             computerScore++;
//         }
//         console.log(playerScore);
//         console.log(computerScore);
//         i++;
//     }

    
//     if(playerScore > computerScore){
//         return "Player Wins";
//     }
//     else if(playerScore === computerScore){
//         return "Tied";
//     }
//     else {
//         return "Computer Wins";
//     }
// }


// console.log(playRound(playerSelection, computerSelection));