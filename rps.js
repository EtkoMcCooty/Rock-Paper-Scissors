function computerPlay () {
    // Create variable to store choices
    const computerChoice = ['rock', 'paper', 'scissors'];
    return computerChoice[Math.floor(Math.random() * 3)];
}

function playRound (playerSelection, computerSelection) {

}

console.log(computerPlay());