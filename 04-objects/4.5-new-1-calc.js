
'use strict'

function Calculator() {
  this.x = 0;
  this.y = 0;

  this.read = function() {
    this.x = 2; //+prompt("x=", 0);
    this.y = 3; //+prompt("y=", 0);
  };

  this.sum = () => this.x + this.y;

  this.mul = () => this.x * this.y;
};

let calculator = new Calculator();
calculator.read();
console.log( calculator.sum() );
console.log( calculator.mul() );
