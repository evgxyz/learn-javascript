
'use strict';

function Range(from, to) {
    this.from = from;
    this.to = to;
    this[Symbol.iterator] = function() {
        return {
            curr: this.from,
            last: this.to,
            next() {
                if (this.curr <= this.last) {
                    return { done: false, value: this.curr++ };
                }
                else {
                    return { done: true, value: null };
                }
            }
        };
    }
}

for (let i of new Range(3, 7))
    console.log(i);