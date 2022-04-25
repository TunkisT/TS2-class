import Person, { PersonInterface } from './Person.js';

interface EmployeeInterface extends PersonInterface {
  work(valSk: number): void;
  // status: boolean;
}

export default class Employee extends Person implements EmployeeInterface {
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
  get hourlyPay(): number {
    return this.payPerHour;
  }

  calcPay(): number {
    let salary: number = this.payPerHour * this.hoursWorked;
    console.log(`${this.name}: ${salary}`);
    this.hoursWorked = 0;
    return salary;
  }
}
