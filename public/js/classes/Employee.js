import Person from './Person.js';
export default class Employee extends Person {
    constructor(name, age, payPerHour) {
        super(name, age);
        this.hoursWorked = 0;
        this.payPerHour = payPerHour;
    }
    work(valSk) {
        this.hoursWorked += valSk;
    }
    get hourlyPay() {
        return this.payPerHour;
    }
    calcPay() {
        let salary = this.payPerHour * this.hoursWorked;
        console.log(`${this.name}: ${salary}`);
        this.hoursWorked = 0;
        return salary;
    }
}
