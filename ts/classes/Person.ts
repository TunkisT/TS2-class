interface PersonInterface {
  id: string;
  name: string;
  age: number;
  greet(): void;
}

export default class Person implements PersonInterface {
  id: string;
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.id = `id_${Math.random() * 10}`;
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello, i am ${this.name}, and i am ${this.age} years old`);
  }
}
