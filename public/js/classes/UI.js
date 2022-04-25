import Employee from './Employee.js';
import Partner from './Partner.js';
export default class Ui {
    static addWorkerRow(worker) {
        if (worker instanceof Employee || worker instanceof Partner) {
            Ui._workers.push();
        }
        else {
            console.warn('not a employee or partner');
        }
    }
    static generateRow() { }
}
Ui._workers = [];
