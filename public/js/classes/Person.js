export default class Person {
    constructor(name, age) {
        this.id = `id_${Math.random() * 10}`;
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, i am ${this.name}, and i am ${this.age} years old`);
    }
}
