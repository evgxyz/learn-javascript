
'use strict'

function printNumbers(from, to) {
    let i = from;
    let timerId = setInterval( function () {
        console.log(i)
        if (i >= to) {
            clearInterval(timerId);
            console.log('stop!');
        } 
        else {
            i++;
        }
    }, 
    1000 );
}

printNumbers(1, 10);
