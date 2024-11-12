// RandomAdventure.js
const game = new Game();
const gameOutput = document.getElementById('game-output');
const northBtn = document.getElementById('north-btn');
const westBtn = document.getElementById('west-btn');
const southBtn = document.getElementById('south-btn');
const eastBtn = document.getElementById('east-btn');
const useItemBtn = document.getElementById('use-item-btn');

gameOutput.innerText = game.describeCurrentLocation();

northBtn.addEventListener('click', () => {
  gameOutput.innerText = game.updateGame('north');
});

westBtn.addEventListener('click', () => {
  gameOutput.innerText = game.updateGame('west');
});

southBtn.addEventListener('click', () => {
  gameOutput.innerText = game.updateGame('south');
});

eastBtn.addEventListener('click', () => {
  gameOutput.innerText = game.updateGame('east');
});

useItemBtn.addEventListener('click', () => {
  gameOutput.innerText = game.useItem();
});


