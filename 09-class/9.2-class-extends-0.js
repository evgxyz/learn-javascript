
'use strict'

class Animal {
    
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }

    run(speed) {
        this.speed = speed;
        console.log(`${this.name} бежит со скоростью ${this.speed}.`);
    }

    stop() {
        this.speed = 0;
        console.log(`${this.name} стоит неподвижно.`);
    }
}
  
class Rabbit extends Animal {

    constructor() {
        super();
        this.name = 'RABBIT';
    }

    hide() {
        console.log(`${this.name} прячется!`);
    }

    stop() {
        super.stop(); // вызываем родительский метод stop
        this.hide(); // и затем hide
    }
}
  
let rabbit = new Rabbit("Белый кролик");

console.log(rabbit.name);

rabbit.stop();