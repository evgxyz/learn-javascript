
'use strict';

function randomInt(min, max) {
    return Math.floor(min + Math.random()*(max - min + 1));
}

function shuffle(arr) {
    let arr1 = [...arr];
    arr.length = 0;

    for (let k = arr1.length - 1; k >= 0; k--) {
        let r = randomInt(0, k); 
        arr.push(arr1[r]); 
        arr1.splice(r, 1);
    }
}

let arr = [ 'a', 'b', 'c', 'd', 'e' ];

shuffle(arr);

console.log(arr);