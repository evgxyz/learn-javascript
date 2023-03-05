
'use strict'

/* function printNumbers(from, to) {
    let i = from;
    let timerId = setTimeout( function step() {
        console.log(i)
        if (i < to) {
            timerId = setTimeout(step, 1000);
            i++;
        } 
        else {
            clearTimeout(timerId);
            console.log('stop!');
        }
    }, 
    1000 );
} */

function printNumbers(from, to) {
    let i = from;
    
    let timerId = setTimeout(step, 1000);

    function step() {
        console.log(i)
        if (i < to) {
            timerId = setTimeout(step, 1000);
            i++;
        } 
        else {
            clearTimeout(timerId);
            console.log('stop!');
        }
    }
}

printNumbers(1, 10);
