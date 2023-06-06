/**
 *  Constants declared for DOM elements and possible choices
 */
// Constants declaration code below based on Code Institute Rock Paper Scissors game
const buttons = getElementByClassName('control');
const playerScores = getElementById("player - scores");
const computerScores = getElementById("computer-scores");
const playerImage = getElementByID("player-image");
const computerImage = getElementByID("computer-image");
const messages = getElementByID('messages');
const options = ['rock', 'paper', 'scissors'];

/**
 * Adding here the  event listeners to each of the buttons
 */

for (let button of buttons) {
    button.addEventListener('click', function() {
        let playerOption = this.getAtribute('data-choice');
        playgame(playerChoice);
    });

}


