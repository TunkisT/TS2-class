export default class Person {
    constructor(name, age) {
        this.id = `id_${Math.floor(Math.random() * 100)}`;
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, i am ${this.name}, and i am ${this.age} years old`);
    }
}
