
'use strict'

let calculator = {
  x: 0,
  y: 0,

  read() {
    this.x = +prompt("x=", 0);
    this.y = +prompt("y=", 0);
  },

  sum() {
    return this.x + this.y;
  },

  mul() {
    return this.x * this.y;
  }
};

calculator.read();
console.log( calculator.sum() );
console.log( calculator.mul() );
