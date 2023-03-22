

function sayHi() {
    console.log('Hi');
}

function sayBye() {
    console.log('Bye');
}

export { 
    sayHi as hi, 
    sayBye as bye
}; 