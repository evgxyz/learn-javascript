
'use strict'

function makeCounter() {
    function counter() {
        return counter.count++;
    };
  
    counter.count = 0;

    counter.set = function (value) {
        return counter.count = value;
    }

    counter.decrease = function () {
        return counter.count--;
    }
  
    return counter;
}

/* function makeCounter() {
    let count = 0;

    function counter() {
        return count++;
    };
  
    counter.set = function (value) {
        return count = value;
    }

    counter.decrease = function () {
        return count--;
    }
  
    return counter;
} */
  
let counter = makeCounter();

console.log( counter() ); 

counter.set(5);

console.log( counter() ); 

console.log( counter.decrease() ); 

console.log( counter() ); 