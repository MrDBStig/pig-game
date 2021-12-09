'use strict';

// Selectors
const score0El = document.getElementById('score--0'),
  score1El = document.getElementById('score--1'),
  current0El = document.getElementById('current--0'),
  current1El = document.getElementById('current--1'),
  diceEl = document.querySelector('.dice'),
  btnNew = document.querySelector('.btn--new'),
  btnRoll = document.querySelector('.btn--roll'),
  btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// Variables
let currentScore = 0;

// Rolling dice functionality
btnRoll.addEventListener('click', () => {
  // 1. Generate a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2.Dispay the dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // 3. Check for rolling 1
  if (dice !== 1) {
    // Add dice to the current score
    currentScore += dice;
    current0El.textContent = currentScore;
  } else {
    // switch to next player
  }
});
