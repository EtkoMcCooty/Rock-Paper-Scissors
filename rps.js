    // Store scores
    var playerScore = 0;
    var computerScore = 0;

let computerPlay = () => {
    // Create variable to store choices
    const computerChoice = ['rock', 'paper', 'scissors'];
    return computerChoice[Math.floor(Math.random() * 3)];
}



let playRound = (playerSelection, computerSelection) => {
    console.log(playerSelection);
    // Return a message declaring the winner
    // For win conditions
    if ((playerSelection === 'rock' && computerSelection === 'scissors') || 
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')) {
            playerScore++;
            return console.log(`You Win! ${playerSelection} beats ${computerSelection}!`);
        }
    // For lose conditions
    else if ((playerSelection === 'rock' && computerSelection === 'paper') ||
             (playerSelection === 'paper' && computerSelection === 'scissors') ||
             (playerSelection === 'scissors' && computerSelection === 'rock')) {
                computerScore++;
                return console.log(`You Lose! ${computerSelection} beats ${playerSelection}!`);
        }
    // For a draw
    else {
        playerScore++;
        computerScore++;
        return console.log('It\'s a draw!');
    }
}

function game () {

    
}

// Create a button for each selection
const rock = document.createElement('button');
rock.textContent = 'Rock';
rock.addEventListener('click', () => {
    playRound('rock', computerPlay());
});
container.appendChild(rock);

const paper = document.createElement('button');
paper.textContent = 'Paper';
paper.addEventListener('click', () => {
    playRound('paper', computerPlay());
});
container.appendChild(paper);

const scissors = document.createElement('button');
scissors.textContent = 'Scissors';
scissors.addEventListener('click', () => {
    playRound('scissors', computerPlay());
});
container.appendChild(scissors);

game();