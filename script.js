'use strict';

// selecting elements
let diceEl = document.querySelector('.dice');
let score1 = document.querySelector('#score--0');
let score2 = document.getElementById('score--1');

score1.textContent = 0;
score2.textContent = 0;
diceEl.classList.add('hidden');
