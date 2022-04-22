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
const e1 = new Employee('Jill', 34, 15);
const e2 = new Employee('John', 20, 10);
e1.work(150);
e2.work(80);

// console.log('e1 ===', e1);
// console.log('e2 ===', e2);
// console.log(e1.calcPay());
// console.log(e2.calcPay());
// console.log('e1 ===', e1);
// console.log('e2 ===', e2);

// [e1, e2].forEach((eObj: Employee) => eObj.calcPay())

// PROJECT ---------------------
const pr1 = new Project('Game', 150);
const pr2 = new Project('header', 250);
const pr3 = new Project('footer', 750);
const pr4 = new Project('about', 300);
const pr5 = new Project('gallery', 400);
const fakePr = { title: 'fake', price: 800, done: false };

//  pr1.finishProject()

// Partners ---------------------------
const parJohn = new Partner('John', 44);
const parJill = new Partner('Jill', 42);

parJohn.addProject(pr1);
parJohn.addProject(pr2);
parJohn.addProject(pr4);
parJill.addProject(pr3);
parJill.addProject(pr5);

console.log('parJohn ===', parJohn);
console.log('parJill ===', parJill);

parJohn.workDone('pr_2');
parJohn.workDone('pr_1');
parJill.workDone('pr_3');

console.log('Person.count ===', Person.count);

// [pr1, pr2, pr3, pr4, pr5].forEach((pr) => console.log(pr));

// parJohn.calcPay();
// parJill.calcPay();

let workersArr: (Employee | Partner)[] = [];
workersArr = workersArr.concat(e1, e2, parJohn, parJill);
console.log('workersArr ===', workersArr);

const alguArr: number[] = workersArr.map((pObj: Employee | Partner) => {
  return pObj.calcPay();
});

console.log('alguArr ===', alguArr);

let allSum = 0;
alguArr.forEach((x) => {
  allSum += x;
});
console.log('allSum ===', allSum);
console.log(Math.max(...alguArr));

const namePayArr = workersArr.map(obj => {
    return {name: obj.name, pay: obj.name}
} )