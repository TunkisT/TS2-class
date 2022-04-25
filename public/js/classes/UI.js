import Employee from './Employee.js';
import Partner from './Partner.js';
export default class Ui {
    static addWorkerRow(worker) {
        if (worker instanceof Employee || worker instanceof Partner) {
            Ui.workers.push(worker);
            Ui.generateRow();
        }
        else {
            console.warn('not a employee or partner');
        }
    }
    static generateRow() {
        this.tBodyEl.innerHTML = '';
        this.workers.forEach((pObj) => {
            console.log('pObj ===', pObj);
            const newRow = this.tBodyEl.insertRow();
            newRow.innerHTML = `
      <td>${pObj.id}</td>
      <td>${pObj.name}</td>
      <td>${pObj.age}</td>`;
            if (pObj instanceof Employee) {
                newRow.innerHTML += `
        <td>Employee</td>
        <td>${pObj.hoursWorked}</td>
        <td>${pObj.hourlyPay}</td>
        `;
            }
        });
    }
}
Ui.workers = [];
Ui.tBodyEl = document.getElementById('workers-body') ||
    null;
