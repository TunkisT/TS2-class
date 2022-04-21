export default class Person {
    constructor(name, age) {
        Person.count++;
        this.id = `id_${Person.count}`;
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, i am ${this.name}, and i am ${this.age} years old`);
    }
}
Person.count = 0;
