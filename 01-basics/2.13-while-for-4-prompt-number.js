
'use strict';

let num;
do {
  num = prompt('Введите число > 100', '');
} 
while ( num && !(num > 100) );

alert('num=' + num);
