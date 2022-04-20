import Animal from './animal.js';
export default class Mamal extends Animal {
    constructor(b, f, s, f4) {
        super(b, f, s);
        this.fourLegs = f4;
    }
}
