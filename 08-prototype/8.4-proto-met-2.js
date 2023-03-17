
'use strict'

function Rabbit(name) {
    this.name = name;
}
Rabbit.prototype.sayHi = function() {
    console.log(this.name);
};
  
let rabbit = new Rabbit("Rabbit1");

rabbit.sayHi();
Rabbit.prototype.sayHi();

Rabbit.prototype = null; //можно изменить, при этом rabbit.__proto__ не изменится
console.log('rabbit.__proto__=' + rabbit.__proto__);

Object.getPrototypeOf(rabbit).sayHi();
rabbit.__proto__.sayHi();
