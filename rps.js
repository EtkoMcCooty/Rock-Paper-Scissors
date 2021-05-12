    // Store scores
    var playerScore = 0;
    var computerScore = 0;

    // store winner
    var winner = ''

    // function to update results div
    let updateResults = () =>
    {
        // remove div from container
        container.removeChild(results);
        // add text content
        results.textContent = `Player Score: ${playerScore}\nCPU Score: ${computerScore}`;
        // re-append results div to container
        container.appendChild(results);
    }

let computerPlay = () => {
    // Create variable to store choices
    const computerChoice = ['rock', 'paper', 'scissors'];
    return computerChoice[Math.floor(Math.random() * 3)];
}

let updateGameLog = (message) => {
    const p = document.createElement('p');
    p.textContent = message;
   return gameLog.appendChild(p);
}

let playRound = (playerSelection, computerSelection) => {
    console.log(playerSelection);
    // Return a message declaring the winner
    // For win conditions
    if ((playerSelection === 'rock' && computerSelection === 'scissors') || 
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')) {
            winner = playerSelection;
            playerScore++;
            // update results 
            updateResults();
            return updateGameLog(`You Win! ${playerSelection} beats ${computerSelection}!`);//console.log(`You Win! ${playerSelection} beats ${computerSelection}!`);
        }
    // For lose conditions
    else if ((playerSelection === 'rock' && computerSelection === 'paper') ||
             (playerSelection === 'paper' && computerSelection === 'scissors') ||
             (playerSelection === 'scissors' && computerSelection === 'rock')) {
                winner = computerSelection
                computerScore++;
                updateResults();
                return updateGameLog(`You Lose! ${computerSelection} beats ${playerSelection}!`);
        }
    // For a draw
    else {
        playerScore++;
        computerScore++;
        updateResults();
        return updateGameLog('It\'s a draw!');
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

// Create div to display results
const results = document.createElement('div');
results.textContent = `Player Score: ${playerScore}\nCPU Score: ${computerScore}`;
container.appendChild(results);

// Create div to store logged game results
const gameLog = document.createElement('div');
container.appendChild(gameLog);