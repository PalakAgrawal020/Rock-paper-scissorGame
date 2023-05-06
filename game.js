function getComputerChoice() {
    let array = ['Rock', 'Paper', 'Scissor'];
    let result = array[Math.floor(Math.random()*array.length)];
    return result;
}

console.log(getComputerChoice());