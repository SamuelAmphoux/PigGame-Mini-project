'use strict';

// Set the scores to 0
const score1 = document.querySelector('#score--0');
const score2 = document.querySelector('#score--1');

const currentScore1 = document.querySelector('#current--0');
const currentScore2 = document.querySelector('#current--1');

const dice = document.querySelector('.dice');

const newGame = function () {
  score1.textContent = 0;
  score2.textContent = 0;
  dice.classList.add('hidden');
};

newGame();

const rollDice = function () {
  const randomNumber = Math.trunc(Math.random() * 6 + 1);
  dice.classList.remove('hidden');
  dice.src = `dice-${randomNumber}.png`;
  if (randomNumber != 1) {
    currentScore1.textContent =
      Number(currentScore1.textContent) + randomNumber;
  } else {
    currentScore1.textContent = 0;
  }
};

function holdScore() {
  score1.textContent =
    Number(score1.textContent) + Number(currentScore1.textContent);
  currentScore1.textContent = 0;
}

const roll = document.querySelector('.btn--roll');
roll.addEventListener('click', rollDice);

const hold = document.querySelector('.btn--hold');
hold.addEventListener('click', holdScore);

const startNewGame = document.querySelector('.btn--new');
startNewGame.addEventListener('click', newGame);
