export default class Calculator {
  a: number;
  b: number;
  constructor(a: number, b: number) {
    this.a = a;
    this.b = b;
  }
  add(a: number, b: number): number {
    return a + b;
  }
  subtract(a: number, b: number): number {
    return a - b;
  }
  multiply(a: number, b: number): number {
    return a * b;
  }
  divide(a: number, b: number): number {
    return a / b;
  }
}
