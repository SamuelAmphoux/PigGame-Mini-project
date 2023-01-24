'use strict';

// Set the scores to 0
const score1 = document.querySelector('#score--0');
score1.textContent = 0;
const score2 = document.querySelector('#score--1');
score2.textContent = 0;

const dice = document.querySelector('.dice');
dice.classList.add('hidden');

const rollDice = function () {
  const randomNumber = Math.trunc(Math.random() * 6 + 1);
  dice.classList.remove('hidden');
  dice.src = `dice-${randomNumber}.png`;
};

rollDice();
