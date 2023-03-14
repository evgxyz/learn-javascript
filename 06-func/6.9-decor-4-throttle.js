
'use strict'

function throttle(func, ms) {
    let lock = false;
    let waitingArgs = null;

    return function (...args) {
        if (!lock) {
            func.call(this, ...args);
            lock = true;

            setTimeout(() => { 
                if (waitingArgs) {
                    func.call(this, ...waitingArgs);
                    lock = true;
                    waitingArgs = null;
                    setTimeout(() => { lock = false; }, ms);
                }
                else
                    lock = false; 
            }, ms)
        }
        else {
            waitingArgs = args;
        }
    }
}

function print(x) {
    console.log(x);
}

let printThr = throttle(print, 1000);

printThr(1);
printThr(2);
setTimeout(() => printThr(3), 100);
setTimeout(() => printThr(4), 1100);
setTimeout(() => printThr(5), 1500);