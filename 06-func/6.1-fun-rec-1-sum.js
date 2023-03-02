
'use strict'

function sumTo(n) {
    return (n == 1) ? 1 : n + sumTo(n-1);
}

function sumTo2(n) {
    let s = 0;
    for (let i = 1; i <= n; i++) s += i;
    return s;
}

function sumTo3(n) {
    return n*(n + 1)/2;
}

console.log(sumTo(100));