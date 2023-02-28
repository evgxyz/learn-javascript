
'use strict';

let readMessages = new WeakSet();

let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

// прочитали сообщение 1, добавили в прочитанные
readMessages.add(messages[1]);

// сообщение 1 считается прочитанным? да
console.log(readMessages.has(messages[1]));

// удаляем сообщение 1
messages.splice(1, 1);

// сообщение 1 считается непрочитанным? нет
console.log(readMessages.has(messages[1]));