
'use strict';

function camelize(str) {
    return (
        str
        .split('-')
        .map( (a, i) => (i > 0) ? a.slice(0, 1).toUpperCase() + a.slice(1) : a )
        .join('')
    );
}

console.log(camelize("-webkit-transition"));
