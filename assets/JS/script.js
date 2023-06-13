/**
 *  Constants declared for DOM elements and possible choices
 */
// Constants declaration code below based on Code Institute Rock Paper Scissors game
const buttons = document.getElementsByClassName('control');
let playerScores = document.getElementById("player-scores");
let computerScores = document.getElementById("computer-scores");
const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");
const messages = document.getElementById('messages');
const choices = ['rock', 'paper', 'scissors'];

let resultMessage = document.getElementById('messages');

/**
 * Adding here the  event listeners to each of the buttons
 */

for (let button of buttons) {
    button.addEventListener('click', function () {
        let playerScores = this.getAttribute("data-choice");
        playGame(playerScores);
    });

}
/**
 * This is the main Game Function. This accepts only one parameter, whichis the selected button. 
 * This function will select the image and the Alt text of the players choice from the DOM.
 * Computer`s choice is randomly selected.
 */

function playGame(playerScores) {

    playerImage.src = `assets/images/${choices[playerScores]}.jpg`;
    playerImage.alt = choices[playerScores];

    let computerChoice = Math.floor(Math.random() * 3);

    computerImage.src = `assets/images/${choices[computerChoice]}.jpg`;
    computerImage.alt = choices[computerChoice];

    let result = (checkWinner(choices[computerScores], choices[playerScores]));


    incrementScorePlayer(result);
    incrementScoreComputer(result);
};

/**
 * Check winner function. With this function, our goal is to compare the choices from the player and from the computer to verufy who won.
 */
function checkWinner() {
    if (playerScores == '0' && computerScores == '2') {
        resultMessage.innnerHTML = 'You Won!';
        incrementScorePlayer();

    } else if (playerScores == '0' && computerScores == '1') {
        resultMessage.innnerHTML = 'Computer Won! Try again!';
        incrementScoreComputer();
    } else if (playerScores == '1' && computerScores == '0') {
        resultMessage.innnerHTML = 'You Won!';
        incrementScorePlayer();

    } else if (playerScores == '1' && computerScores == '2') {
        resultMessage.innnerHTML = 'Computer Won! Try again!';
        incrementScoreComputer();

    } else if (playerScores == '2' && computerScores == '1') {
        resultMessage.innnerHTML = 'You Won!';
        incrementScorePlayer();

    } else if (playerScores == '2' && computerScores == '0') {
        resultMessage.innnerHTML = 'Computer Won! Try again!';
        incrementScoreComputer();
    } else (playerScores === computerScores); {
        resultMessage.innnerHTML = 'Its a Draw!';
    }
}

/** Functions created to increment the score of the player and the Computer. based on the Code institute love math game */

function incrementScorePlayer() {
    let oldScore = parseInt(document.getElementById('playerScores').innerText);
    document.getElementById('playerScores').innerText = ++oldScore;
}

function incrementScoreComputer() {
    let oldScore = parseInt(document.getElementById('computerScores').innerText);
    document.getElementById('computerScores').innerText = ++oldScore;

}

