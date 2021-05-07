function computerPlay () {
    // Create variable to store choices
    const computerChoice = ['rock', 'paper', 'scissors'];
    return computerChoice[Math.floor(Math.random() * 3)];
}

function playRound (playerSelection, computerSelection) {
    // Store computer's selection
    //computerSelection = computerPlay();
    // Prompt player to pick an option
    //playerSelection = prompt('What do you choose (Rock, Paper or Scissors: ');
    // Change playerSelection text to lowercase
    playerSelection.toLowerCase();
    // Return a message declaring the winner
    // For win conditions
    if ((playerSelection === 'rock' && computerSelection === 'scissors') || 
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')) {
        return `You Win! ${playerSelection} beats ${computerSelection}!`;
    }
    // For lose conditions
    else if ((playerSelection === 'rock' && computerSelection === 'paper') ||
             (playerSelection === 'paper' && computerSelection === 'scissors') ||
             (playerSelection === 'scissors' && computerSelection === 'rock')) {
            return `You Lose! ${computerSelection} beats ${playerSelection}!`;
        }
    // For a draw
    else {
        return 'It\'s a draw!';
    }
}

function game () {
    // Store scores
    let playerScore = 0;
    let computerScore = 0;

    // play 5 rounds
    for (i = 1; i <= 5; i++) {
        console.log(i);
        playRound(prompt('What do you choose? (Rock, Paper or Scissors?'), computerPlay());
    // Each round, give one pint to the winner
    }
    // Whoever wins the most rounds wins the game
}

game();