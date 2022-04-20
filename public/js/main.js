'use strict';
console.log('main.ts55');
const obj1 = {
  name: 'James',
  age: 30,
  greet: () => {
    console.log(`${this.name} is ${this.age} years old. Hi!`);
  },
};
const obj2 = {
  name: 'Mike',
  age: 40,
  greet: () => {
    console.log(`${this.name} is ${this.age} years old. Hi!`);
  },
};
console.log('obj1 ===', obj1);
console.log('obj2 ===', obj2);
class UserObj {
  constructor(a, b) {
    this.name = a;
    this.age = b;
  }
  greet() {
    console.log(`${this.name} is ${this.age} years old. Hi!`);
  }
}
const obj3 = new UserObj('Jill', 35);
obj3.greet();
const obj4 = new UserObj('Bob', 47);
console.log('obj4 ===', obj4);
const usersArr = [obj3];
usersArr.push(obj2);
console.log('usersArr ===', usersArr);
