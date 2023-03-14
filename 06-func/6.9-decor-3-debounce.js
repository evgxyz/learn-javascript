
'use strict'

/* function debounce(func, ms) {
    let lock = false;

    return function (...args) {
        if (!lock) {
            func.call(this, ...args);
            lock = true;
            setTimeout(() => { lock = false; }, ms)
        }
    }
} */

function debounce(func, ms) {
    
    function f(...args) {
        let now = (new Date()).getTime();
        if (!f.lastTime || now - f.lastTime >= ms) {
            func.call(this, ...args);
            f.lastTime = now;
        }
    }

    f.lastTime = null;

    return f;
} 

function print(x) {
    console.log(x);
}

let printDeb = debounce(print, 1000);

printDeb(1);
printDeb(2);
setTimeout(() => printDeb(3), 100);
setTimeout(() => printDeb(4), 1100);
setTimeout(() => printDeb(5), 1500);