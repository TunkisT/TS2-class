export default class Player {
    constructor(name, age, height, weight) {
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
    }
    getAge() {
        console.log(`${this.name} is age ${this.age}`);
    }
    getHeight() {
        console.log(`${this.name} is ${this.height}cm height`);
    }
    getWeight() {
        console.log(`${this.name} weight ${this.weight}kg`);
    }
}
