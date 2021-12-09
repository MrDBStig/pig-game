'use strict';

// Selectors
const player0El = document.querySelector('.player--0'),
  player1El = document.querySelector('.player--1'),
  score0El = document.getElementById('score--0'),
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
let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

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
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // Reset score for current player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;

    // switch to next player
    activePlayer = activePlayer === 0 ? 1 : 0;

    // Toggle background styles
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});
