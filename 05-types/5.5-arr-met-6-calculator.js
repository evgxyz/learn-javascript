
'use strict';

function Calculator() {
    this.operations = {
        "+": (x, y) => x + y,
        "-": (x, y) => x - y,
    };

    this.calculate = function (expr) {
        let matches = expr.match(/(\-?\d+)\s*([\+\-\*\/]+)\s*(\-?\d+)/i);
        if (!matches) return null;
        
        let op = matches[2];
        let x = +matches[1];
        let y = +matches[3];

        return ( 
            (op in this.operations) ? this.operations[op]?.(x, y) : null
        ); 
    };

    this.addMethod = function (op, fn) {
        this.operations[op] = fn;
    };
};
  
let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 / 3x");
console.log( result ); 

