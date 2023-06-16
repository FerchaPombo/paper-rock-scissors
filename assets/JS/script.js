/**
 *  Constants declared for DOM elements and possible choices
 */
// Constants declaration code below based on Code Institute Rock Paper Scissors game
const buttons = document.getElementsByClassName('control');
let playerScoreElement = document.getElementById("player-scores");
let computerScoreElement = document.getElementById("computer-scores");
const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");
const choices = ['rock', 'paper', 'scissors'];

let resultMessage = document.getElementById('messages');

/**
 * Adding here the  event listeners to each of the buttons
 */

for (let button of buttons) {
    button.addEventListener('click', function () {
        let playerChoiceIndex = this.getAttribute("data-choice");
        let playerChoice = choices[playerChoiceIndex];
        playGame(playerChoice);
    });

}
/**
 * This is the main Game Function. This accepts only one parameter, whichis the selected button. 
 * This function will select the image and the Alt text of the players choice from the DOM.
 * Computer`s choice is randomly selected.
 */

function playGame(playerChoice) {

    playerImage.src = `assets/images/${playerChoice}.jpg`;
    playerImage.alt = playerChoice;

    let computerChoiceIndex = Math.floor(Math.random() * 3);
    let computerChoice = choices[computerChoiceIndex];

    computerImage.src = `assets/images/${computerChoice}.jpg`;
    computerImage.alt = computerChoice;

    let result = checkWinner(computerChoice, playerChoice);
    if (result === 'player') {
        incrementScorePlayer();
    } else if (result === 'computer') {
        incrementScoreComputer();
    }
};

/**
 * Check winner function. With this function, our goal is to compare the choices from the player and from the computer to verify who won.
 */
function checkWinner(playerChoice, computerChoice) {

    if (playerChoice === 'rock' && computerChoice === 'scissors') {
        resultMessage.innnerText = 'Computer Won! Try again!';
        return 'player';

    } else if (playerChoice === 'rock' && computerChoice === 'paper') {
        resultMessage.innerText = 'You Won';
        return 'computer';

    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        resultMessage.innerText = 'Computer Won! Try again!';
        return 'player';

    } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
        resultMessage.innerText = 'You Won!';
        return 'computer';

    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        resultMessage.innerText = 'Computer Won! Try again!';
        return 'player';

    } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
        resultMessage.innerText = 'You Won!';
        return 'computer';
    } else if (playerChoice === computerChoice); {
        resultMessage.innerText = 'Its a Draw!';
        return 'draw';
    }
}

/** Functions created to increment the score of the player and the Computer. based on the Code institute love math game */

function incrementScorePlayer() {
    let oldScore = parseInt(playerScoreElement.innerText);
    computerScoreElement.innerText = ++oldScore;
}


function incrementScoreComputer() {
    let oldScore = parseInt(computerScoreElement.innerText);
    playerScoreElement.innerText = ++oldScore;

}
