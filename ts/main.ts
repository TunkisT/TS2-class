import Employee from './classes/Employee.js';
import Person from './classes/Person.js';

const p1 = new Person('James', 40);
console.log('p1 ===', p1);
p1.greet()

const e1 = new Employee('Jill', 34, 33)
const e2 = new Employee('John', 20, 50)
e2.work(80)
e2.greet()
console.log('e1 ===', e1);
console.log('e2 ===', e2);