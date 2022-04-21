export default class Player {
  name: string;
  age: number;
  height: number;
  weight: number;
  constructor(name: string, age: number, height: number, weight: number) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.weight = weight;
  }

  getAge(): void {
    console.log(`${this.name} is age ${this.age}`);
  }

  getHeight(): void {
    console.log(`${this.name} is ${this.height}cm height`);
  }

  getWeight(): void {
    console.log(`${this.name} weight ${this.weight}kg`);
  }
}
