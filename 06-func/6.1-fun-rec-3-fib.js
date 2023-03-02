
'use strict'

function fib(a, b, n) {
    return (n <= 1) ? b : fib(b, a + b, n - 1);
}

console.log(fib(0, 1, 77));