
'use strict'

function Rabbit(name) {
    this.name = name;
}

Rabbit.prototype = 'abc';

let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == 'abc'???

console.log( rabbit.__proto__ ); 
