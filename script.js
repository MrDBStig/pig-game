'use strict';

// Variables

// Selectors
const score0El = document.getElementById('score--0'),
  score1El = document.getElementById('score--1'),
  diceEl = document.querySelector('.dice');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
