
'use strict'

function Accumulator(value) {
  this.value = value;

  this.read = function() {
    let x = 2; //+prompt("x=", 0);
    this.value += x;
  };
};

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

console.log(accumulator.value); // выведет сумму этих значений
