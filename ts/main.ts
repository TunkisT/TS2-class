import Employee from './classes/Employee.js';
import Person from './classes/Person.js';
import Project from './classes/Projects.js';
import Calculator from './Edabit/Calculator.js';
import Player from './Edabit/Player.js';

// const p1 = new Person('James', 40);
// console.log('p1 ===', p1);
// p1.greet()

// EMPLOYEE -----------------------
// const e1 = new Employee('Jill', 34, 15)
// const e2 = new Employee('John', 20, 10)
// e1.work(150)
// e2.work(80)

// console.log('e1 ===', e1);
// console.log('e2 ===', e2);

// console.log(e1.calcPay());
// console.log(e2.calcPay());

// console.log('e1 ===', e1);
// console.log('e2 ===', e2);

// PROJECT ---------------------
//  const proj1 = new Project('Game', 1500)

//  console.log('proj1 ===', proj1);
//  proj1.finishProject()
//  console.log('proj1 ===', proj1);

// EDABIT -------------
const calculator = new Calculator(0, 0);
console.log(calculator.add(10, 5));
console.log(calculator.subtract(10, 5));
console.log(calculator.multiply(10, 5));
console.log(calculator.divide(10, 5));

const pl1 = new Player('David Jones', 25, 175, 75);
pl1.getAge();
pl1.getHeight();
pl1.getWeight();
