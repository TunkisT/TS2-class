import Employee from './classes/Employee.js';
import Partner from './classes/Partner.js';
import Ui from './classes/UI.js';

console.log('html.js');

// 1. nustaikyti i forma. suttabdyti nuo persiuntimo
// 2. surinkti input reiksmes
// 3. jei selectas parinktas kaip employee tai kuriam new Employee
// 4. jei selectas parinktas kaip Partner tai kuriam new Partner
// 5. kai pasikeicia select reiksme mes hide arba show payPerHour input

const form = document.getElementById('addPerson') as HTMLFormElement | null;
const nameEl = document.getElementById('name') as HTMLInputElement | null;
const ageEl = document.getElementById('age') as HTMLInputElement | null;
const workerType = document.getElementById('workerType') as HTMLSelectElement;
const payPerHour = document.getElementById('payPerHour') as HTMLInputElement;

form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const name: string = nameEl?.value || '';
  const age: number = ageEl?.valueAsNumber || 0;
  const pay: number = payPerHour?.valueAsNumber || 0;

  if (workerType?.value === 'em') {
    console.log('employee data =', name, age, pay);
    const e1 = new Employee(name, age, pay);
    Ui.addWorkerRow(e1);
    console.log('Ui ===', Ui.workers);
  } else {
    console.log('partner data =', name, age);
    const p1 = new Partner(name, age);
    Ui.addWorkerRow(p1);
  }
});

workerType?.addEventListener('change', (e) => {
  workerType?.value === 'em'
    ? (payPerHour.type = 'number')
    : (payPerHour.type = 'hidden');
});
