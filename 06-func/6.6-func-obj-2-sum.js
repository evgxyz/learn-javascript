
'use strict'

function sum(a) {
    let s = a;

    function f(b) {
        s += b;
        return f;
    };

    /* f.toString = function () {
        return s;
    }; */

    f[Symbol.toPrimitive] = function () {
        return s;
    };

    return f;
}

console.log( +sum(1)(2)(3)(4) );
