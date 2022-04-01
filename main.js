
// An array of available choices to pick from
const gameChoices = ['rock', 'paper', 'scissors'];

// A function that will randomly pick the computer's choice from the array
const computerPlay = () => {
    return gameChoices[Math.floor(Math.random() * gameChoices.length)];
}

// A function that will play one round of Rock, Paper, Scissors
const playRound = (computerSelection, playerSelection) => {

   computerSelection = computerPlay();
   playerSelection = prompt('Please enter rock, paper, or scissors.').toLowerCase();

    if (computerSelection === gameChoices[0] && playerSelection === gameChoices[1]) {
        return 'You win! Paper covers rock!';
    } else if (computerSelection === gameChoices[0] && playerSelection === gameChoices[2]) {
        return 'You lose! Rock crushes paper!';
    } else if (computerSelection === gameChoices[1] && playerSelection === gameChoices[0]) {
        return 'You lose! Paper covers rock!';
    } else if (computerSelection === gameChoices[1] && playerSelection === gameChoices[2]) {
        return 'You win! Scissors cut paper!';
    } else if (computerSelection === gameChoices[2] && playerSelection === gameChoices[0]) {
        return 'You win! Rock crushes scissors!';
    } else if (computerSelection === gameChoices[2] && playerSelection === gameChoices[1]) {
        return 'You lose! Scissors cut paper!';
    } else {
        return 'Tie game!';
    }
};

const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        playRound(i);
    }
};