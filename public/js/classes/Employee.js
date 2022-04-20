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
    calcPay() { }
}
