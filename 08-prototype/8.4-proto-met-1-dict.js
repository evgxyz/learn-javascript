
'use strict'

let dictionary = Object.create(null);

Object.defineProperty(dictionary, 'toString', {
    value() { return Object.keys(this).join(', '); },
    enumerable: false,
    writable: false
});

// добавляем немного данных
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ

// только apple и __proto__ выведены в цикле
for (let key in dictionary) {
    console.log(key); // "apple", затем "__proto__"
}

// ваш метод toString в действии
console.log(String(dictionary));  
