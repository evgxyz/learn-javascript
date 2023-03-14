
'use strict'

function throttle(func, ms) {
    let lock = false;
    let savedArgs = null;
    let savedThis = null;

    return function f(...args) {
        savedArgs = args;
        savedThis = this;
        
        if (!lock) {
            lock = true;
            func.call(savedThis, ...savedArgs);
            
            setTimeout(() => { 
                lock = false; 
                if (savedArgs) {
                    f.call(savedThis, ...savedArgs);
                    savedArgs = null;
                    savedThis = null;
                }    
            }, ms);
        }
    }
}

function print(x) {
    console.log('arg=' + x + ', time=' + (unixTime() - startTime));
}

function unixTime() {
    return (new Date()).getTime();
}

let printThr = throttle(print, 1000);

let startTime = unixTime();

printThr(1);
printThr(2);
setTimeout(() => printThr(3), 100);
setTimeout(() => printThr(4), 1100);
setTimeout(() => printThr(5), 1500);