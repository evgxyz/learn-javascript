
'use strict'

const number = +prompt('Введите число между 0 и 3', '');

let msg = '';
switch (number) {
  case 0:
    msg = 'Вы ввели число 0';
    break;

  case 1:
    msg = 'Вы ввели число 1';
    break;

  case 2:
  case 3:
    msg = 'Вы ввели число 2, а может и 3';
    break;
}

console.log(msg); 