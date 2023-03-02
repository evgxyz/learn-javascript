
'use strict'


function User(name) {
    this.changeName = function(newName) {
        name = newName;
    };
    this.sayHi = function() {
        console.log(name);
    };
}
  
let user = new User("John");
user.changeName("Pete");
user.sayHi();