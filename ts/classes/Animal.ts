export default class Animal {
  private breed: string;
  readonly fluffy: boolean;
  sound: string;

  constructor(b: string, f: boolean, s: string) {
    this.breed = b;
    this.fluffy = f;
    this.sound = s;
  }

  makeSound() {
    console.log(`${this.sound}!!!!`);
  }
}