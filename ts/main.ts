import Employee from './classes/Employee.js';
import Partner from './classes/Partner.js';
import Person from './classes/Person.js';
import Project from './classes/Projects.js';
import Calculator from './Edabit/Calculator.js';
import EdEmployee from './Edabit/EdEmployee.js';
import Player from './Edabit/Player.js';
import Point from './Edabit/Point.js';

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

// [e1, e2].forEach((eObj: Employee) => eObj.calcPay())

// PROJECT ---------------------
const proj1 = new Project('Game', 150);
const proj2 = new Project('header', 250);
const proj3 = new Project('footer', 750);
const proj4 = new Project('about', 300);
const proj5 = new Project('gallery', 400);
const fakePr = { title: 'fake', price: 800, done: false };

//  console.log('proj1 ===', proj1);
//  proj1.finishProject()
//  console.log('proj1 ===', proj1);

// EDABIT -------------
// const calculator = new Calculator(0, 0);
// console.log(calculator.add(10, 5));
// console.log(calculator.subtract(10, 5));
// console.log(calculator.multiply(10, 5));
// console.log(calculator.divide(10, 5));

// const pl1 = new Player('David Jones', 25, 175, 75);
// pl1.getAge();
// pl1.getHeight();
// pl1.getWeight();

// const point1 = new Point(5, 15);
// console.log(point1.toString());

// const emp1 = new EdEmployee('John', 'Smith');
// console.log(emp1.fullname);
// console.log(emp1.email);
// console.log(emp1.firstname);

// Partners ---------------------------
const par1 = new Partner('John', 25);
const par2 = new Partner('Jill', 38);

par1.addProject(proj1);
par1.addProject(proj2);
par1.addProject(proj4);
par2.addProject(proj3);
par2.addProject(proj5);
// par2.addProject(fakePr);
console.log('par1 ===', par1);
console.log('par2 ===', par2);

par1.workDone('proj_2')

console.warn(Person.count);
[proj1, proj2, proj3, proj4, proj5].forEach((pr) => console.log(pr));
