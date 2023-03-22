
'use strict'

class Complex {

    x = 0;
    y = 0;

    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    };

    get re() { return x; }
    set re(x) { this.x = x }
    get im() { return y }
    set im(x) { this.y = y }

    get abs() { 
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2)); 
    }

    get conj() {
        return new Complex(this.x, -this.y);
    }

    toString() {
        let str = '';
        
        if (this.x != 0) {
            str += `${this.x > 0 ? '+' : '–'}${Math.abs(this.x)}`;
        }

        if (this.y != 0) {
            str += `${this.y > 0 ? '+' : '–'}${Math.abs(this.y)}i`;
        }

        return str;
    };
}

let z = new Complex(-4, 3);


console.log(typeof Complex);
console.log(Object.getOwnPropertyNames(Complex.prototype));
console.log('z=' + String(z));
console.log('z\'=' + String(z.conj));
console.log(z.conj.abs);