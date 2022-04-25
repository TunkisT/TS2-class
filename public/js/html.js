import Employee from './classes/Employee.js';
import Partner from './classes/Partner.js';
console.log('html.js');
const form = document.getElementById('addPerson');
const nameEl = document.getElementById('name');
const ageEl = document.getElementById('age');
const workerType = document.getElementById('workerType');
const payPerHour = document.getElementById('payPerHour');
form === null || form === void 0 ? void 0 : form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = (nameEl === null || nameEl === void 0 ? void 0 : nameEl.value) || '';
    const age = (ageEl === null || ageEl === void 0 ? void 0 : ageEl.valueAsNumber) || 0;
    const pay = (payPerHour === null || payPerHour === void 0 ? void 0 : payPerHour.valueAsNumber) || 0;
    if ((workerType === null || workerType === void 0 ? void 0 : workerType.value) === 'em') {
        console.log('employee data =', name, age, pay);
        const e1 = new Employee(name, age, pay);
    }
    else {
        console.log('partner data =', name, age);
        const p1 = new Partner(name, age);
    }
});
workerType === null || workerType === void 0 ? void 0 : workerType.addEventListener('change', (e) => {
    (workerType === null || workerType === void 0 ? void 0 : workerType.value) === 'em'
        ? (payPerHour.type = 'number')
        : (payPerHour.type = 'hidden');
});
