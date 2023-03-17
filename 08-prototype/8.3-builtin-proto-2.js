
'use strict'

Function.prototype.defer = function(ms) {
    let func = this;
    return function (...args) {
        setTimeout(() => {
            func.call(this, ...args);
        }, ms);
    }
}

function f(a, b) {
    console.log(a + b);
}
  
f.defer(1000)(1, 2);  
