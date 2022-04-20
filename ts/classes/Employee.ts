import Person from './Person.js';

export default class Employee extends Person {
  private hoursWorked: number;
  private payPerHour: number;
  constructor(name: string, age: number, payPerHour: number) {
    super(name, age);
    this.hoursWorked = 0;
    this.payPerHour = payPerHour;
  }
  work(valSk: number) {
    this.hoursWorked += valSk;
  }

  calcPay() {}
}
