
'use strict'

function pow(x, n) {
    let P = 1;
    for (let i = 0; i < n; i++) P *= x;
    return P;
}

let x = +prompt('x=', '');
let n = +prompt('n=', '');

if ( (n % 1 === 0) && (n >= 0) ) {
    alert(pow(x, n));
}
else {
    alert(`Не могу возводить в степень ${n}. Введите целое неотрицательное число.`);
}


