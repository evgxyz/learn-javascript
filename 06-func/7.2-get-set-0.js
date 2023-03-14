
'use strict'

let user = {
    _value: 0,
    name: "John",
    surname: "Smith",

    get fullName() {
        return `${this.name} ${this.surname}`;
    },

    set value(x) {
        this._value = Number(x);
    }
};

console.log('fullName=' + user.fullName);

user.value = 5;

console.log('_value=' + user._value);

