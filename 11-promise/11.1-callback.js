
'use strict'

let myFunct = null;

function loadMyFunct(callback) {
    // long time work
    setTimeout(() => {
        myFunct = function () {
            console.log('myFunct!');
        };
        callback();
    }, 
    1000); 
}

function useMyFunct() {
    myFunct();
}

loadMyFunct(useMyFunct);