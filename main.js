
// An array of available choices to pick from
const gameChoices = ['rock', 'paper', 'scissors'];

// Variables that will keep track of the current score
let playerScore = 0;
let computerScore = 0;

// A function that will randomly pick the computer's choice from the array
const computerPlay = () => {
    return gameChoices[Math.floor(Math.random() * gameChoices.length)];
}

// A function that will play one round of Rock, Paper, Scissors
const playRound = (computerSelection, playerSelection) => {

    computerSelection = computerPlay();
    playerSelection = prompt('Please enter rock, paper, or scissors.').toLowerCase();

    if (computerSelection === gameChoices[0] && playerSelection === gameChoices[1]) {
        return `${playerScore++}You win! Paper covers rock!`;
    } else if (computerSelection === gameChoices[0] && playerSelection === gameChoices[2]) {
        return `${computerScore++}You lose! Rock crushes paper!`;
    } else if (computerSelection === gameChoices[1] && playerSelection === gameChoices[0]) {
        return `${computerScore++}You lose! Paper covers rock!`;
    } else if (computerSelection === gameChoices[1] && playerSelection === gameChoices[2]) {
        return `${playerScore++}You win! Scissors cut paper!`;
    } else if (computerSelection === gameChoices[2] && playerSelection === gameChoices[0]) {
        return `${playerScore++}You win! Rock crushes scissors!`;
    } else if (computerSelection === gameChoices[2] && playerSelection === gameChoices[1]) {
        return `${computerScore++}You lose! Scissors cut paper!`;
    } else if (computerSelection === playerSelection) {
        return 'Tie game!';
    } else {
        return 'Please enter a valid selection';
    }
};

const game = () => {
// Repeats the playRound() function 5 times and logs each rounds winner
    for (let i = 0; i < 5; i++) {

        playRound()

        console.log(`Your score is ${playerScore}.`);
        console.log(`The computer's score is ${computerScore}.`);
    }
// Logs the winner of the whole game
    if (playerScore > computerScore) {
        console.log(`You won the game! :) ${playerScore} - ${computerScore}`);
    } else if (playerScore < computerScore) {
        console.log(`You lost the game! :( ${playerScore} - ${computerScore}`);
    } else {
        console.log(`The game was tied! ${playerScore} - ${computerScore}`);
    }
};

// Calls and executes the game() function
game();