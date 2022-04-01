const gameChoices = ['rock', 'paper', 'scissors'];

const computerPlay = () => {
    return gameChoices[Math.floor(Math.random() * gameChoices.length)];
}
