
'use strict';

function random(min, max) {
  return min + Math.random()*(max - min);
}

function randomInt(min, max) {
  return Math.floor(min + Math.random()*(max - min + 1));
}

let x = randomInt(10, 20);
console.log('x=' + x);