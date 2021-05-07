    // Store scores
    var playerScore = 0;
    var computerScore = 0;

let computerPlay = () => {
    // Create variable to store choices
    const computerChoice = ['rock', 'paper', 'scissors'];
    return computerChoice[Math.floor(Math.random() * 3)];
}

let playRound = (playerSelection, computerSelection) => {
    // Change playerSelection text to lowercase
    playerSelection.toLowerCase();
    // Return a message declaring the winner
    // For win conditions
    if ((playerSelection === 'rock' && computerSelection === 'scissors') || 
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')) {
            console.log('Player Wins');
            playerScore++;
            return `You Win! ${playerSelection} beats ${computerSelection}!`;
        }
    // For lose conditions
    else if ((playerSelection === 'rock' && computerSelection === 'paper') ||
             (playerSelection === 'paper' && computerSelection === 'scissors') ||
             (playerSelection === 'scissors' && computerSelection === 'rock')) {
                console.log('CPU Wins!');
                computerScore++;
                return `You Lose! ${computerSelection} beats ${playerSelection}!`;
        }
    // For a draw
    else {
        console.log('Draw!');
        playerScore++;
        computerScore++;
        return 'It\'s a draw!';
    }
}

function game () {

    // play 5 rounds
    // Each round, give one point to the winner
    for (i = 1; i <= 5; i++) {
        console.log(i);
        playRound(prompt('What do you choose? (Rock, Paper or Scissors?'), computerPlay());
        console.log(`Player: ${playerScore}`);
        console.log(`CPU: ${computerScore}`);

    }
    // Determine Winner
    let message = (playerScore > computerScore) ? `Player: ${playerScore}\nCPU: ${computerScore}\n\nPlayer Wins!` : 
                 (playerScore < computerScore) ? `Player: ${playerScore}\nCPU: ${computerScore}\n\nCPU Wins!` :
                 `Player: ${playerScore}\nCPU: ${computerScore}\n\nIt\'s a draw!`

    console.log(message);
    return message;
}

game();