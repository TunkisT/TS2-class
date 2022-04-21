export interface PersonInterface {
  id: string;
  name: string;
  age: number;
  greet(): void;
}

export default abstract class Person implements PersonInterface {
  // statine savybe priskiriama visai klasei
  static count: number = 0;
  id: string;
  name: string;
  age: number;
  constructor(name: string, age: number) {
    Person.count++;
    this.id = `id_${Person.count}`;
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello, i am ${this.name}, and i am ${this.age} years old`);
  }
  abstract calcPay(): number;
}
