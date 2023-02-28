
'use strict';

let readMessages = new WeakMap();

let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

// прочитали сообщение 1, добавили в прочитанные
readMessages.set(messages[1], new Date());

// сообщение 1 считается прочитанным? 
console.log(readMessages.get(messages[1]));

// удаляем сообщение 1
messages.splice(1, 1);

// сообщение 1 считается непрочитанным? нет
console.log(readMessages.get(messages[1]));