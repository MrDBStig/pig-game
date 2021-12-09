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

// Variables
let scores, currentScore, activePlayer, playing;

// Functions
const init = function () {
  // Starting conditions
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  // UI
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--winner', 'player--active');
};
init();

const switchPlayer = function () {
  // Reset score for current player
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;

  // switch to the next player
  activePlayer = activePlayer === 0 ? 1 : 0;

  // Toggle background styles
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', () => {
  if (playing) {
    // Generate a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // Dispay the dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // Check for rolling 1
    if (dice !== 1) {
      // Add dice to the current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

// Hold score functionality
btnHold.addEventListener('click', () => {
  if (playing) {
    // Add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      // Finish the game
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

// Reset game functionality
btnNew.addEventListener('click', init);
