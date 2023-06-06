/**
 *  Constants declared for DOM elements and possible choices
 */
// Constants declaration code below based on Code Institute Rock Paper Scissors game
const buttons = document.getElementsByClassName('control');
const playerScores = document.getElementById("player-scores");
const computerScores = document.getElementById("computer-scores");
const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");
const messages = document.getElementById('messages');
const choices = ['rock', 'paper', 'scissors'];

/**
 * Adding here the  event listeners to each of the buttons
 */

for (let button of buttons) {
    button.addEventListener('click', function () {
        let playerChoice = this.getAttribute("data-choice");
        playGame(playerChoice);
    });

}
/**
 * This is the main Game Function. This accepts only one parameter, whichis the selected button. 
 * This function will select the image and the Alt text of the players choice from the DOM.
 * Computer`s choice is randomly selected.
 */

function playGame(playerChoice) {

    playerImage.src = `assets/images/${choices[playerChoice]}.jpg`;
    playerImage.alt = choices[playerChoice];

    let computerChoice = Math.floor(Math.random() * 3);

    computerImage.src = `assets/images/${choices[computerChoice]}.jpg`;
    computerImage.alt = choices[computerChoice];

    let result = checkWinner(choices[computerChoice], choices[playerChoice]);

    checkWinner(result);


}

/**
 * here we add the functions to see who the winner is. 
 */

function checkWinner() {
    if (playerScores === computerScores) {
        return "You draw!";
    }
    if (playerScores === 'rock') {
        if (computerScores === 'paper') {
            return 'Computer Wins!';
        }
    }
    else {
        return 'You Win!';
    }
    if (playerScores === 'paper') {
        if (computerScores === 'scissors') {
            return 'Computer Wins!';
        }
    }
    else {
        return 'You Win!';
    }
    if (playerScores === 'scissors') {
        if (computerScores === 'rock') {
            return 'Computer Wins!';
        }
    }
    else {
        return 'You Win!';
    }
};

/**
 * add a function to update the resut 
 */