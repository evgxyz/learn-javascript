
'use strict';

let login = prompt('Логин:', '');

if (!login) {
    alert('Отменено');
} 
else
if (login == 'Админ') {   
    let pass = prompt('Пароль:', '');

    if (!pass) {
        alert('Отменено');
    } 
    else
    if (pass == 'Я главный') {
        alert('Здравствуйте, ' + login + '!');
    } 
    else {
        alert('Неверный пароль');
    }
}
else {
    alert('Я вас не знаю');
}
    