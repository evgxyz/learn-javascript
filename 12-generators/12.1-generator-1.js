
'use strict'

function* pseudoRandom(seed) {
    let x = seed;
    while(true) {
      x = x * 16807 % 2147483647;
      yield x;
    }
};
  
let generator = pseudoRandom(1);

setInterval(() => {
  console.log(generator.next().value);
}, 300);
