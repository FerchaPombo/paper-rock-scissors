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
    button.addEventListener('click', function () {
        let playerOption = this.getAtribute('data-choice');
        playGame(playerChoice);
    });

}
/**
 * This is the main Game Function. This accepts only one parameter, whichis the selected button. 
 * This function will select the image and the Alt text of the players choice from the DOM.
 * Computer`s choice is randomly selected.
 */

function playGame(playerChoice) {

    playerImage.src = `assets/images/${OPTIONS[playerOption]}.png`;
    playerImage.alt = OPTIONS[playerOption];

    let computerChoice = math.floor(math.random() * 3);

    computerImage.src = `assets/images/${OPTIONS[computerOption]}.png`;
    computerImage.alt = OPTIONS[computerOption];


}

