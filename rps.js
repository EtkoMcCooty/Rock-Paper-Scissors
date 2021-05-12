// Store scores
var playerScore = 0;
var computerScore = 0;

// store winner
var winner = '';

// Create div to display results
const results = document.createElement('div');
results.textContent = `Player Score: ${playerScore}\nCPU Score: ${computerScore}`;
container.appendChild(results);

// Create div to store logged game results
const gameLog = document.createElement('div');
container.appendChild(gameLog);

// Create button elements
const rock = document.createElement('button');
rock.textContent = 'Rock';

const paper = document.createElement('button');
paper.textContent = 'Paper';

const scissors = document.createElement('button');
scissors.textContent = 'Scissors';

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
let declareWinner = (winner) => {
    const p = document.createElement('p');
    p.textContent = `${winner} has reached 5 points, ${winner} wins!`;
    return gameLog.appendChild(p);
  }

let removeButtons = () => {
    container.removeChild(rock);
    container.removeChild(paper);
    container.removeChild(scissors);
}

let game = () => {
    // Create a button for each selection
    
    rock.addEventListener('click', () => {
        playRound('rock', computerPlay());
        
        if (playerScore === 5) {
            removeButtons();
            declareWinner('Player');
        }
        else if (computerScore === 5) {
            removeButtons();
            declareWinner('Computer');
        }

    });
    container.appendChild(rock);

    
    paper.addEventListener('click', () => {
        playRound('paper', computerPlay());

        if (playerScore === 5) {
            removeButtons();
            declareWinner('Player');
        }
        else if (computerScore === 5) {
            removeButtons();
            declareWinner('Computer');
        }

    });
    container.appendChild(paper);

    scissors.addEventListener('click', () => {
        playRound('scissors', computerPlay());

        if (playerScore === 5) {
            removeButtons();
            declareWinner('Player');
        }
        else if (computerScore === 5) {
            removeButtons();
            declareWinner('Computer');
        }

    });
    container.appendChild(scissors);
}

game();
