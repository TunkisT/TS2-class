import Employee from './Employee.js';
import Partner from './Partner.js';

export default class Ui {
  static _workers: (Employee | Partner)[] = [];

  static addWorkerRow(worker: Employee | Partner) {
    if (worker instanceof Employee || worker instanceof Partner) {
      Ui._workers.push();
    } else {
      console.warn('not a employee or partner');
    }
  }
  static generateRow() {}
}
// Ui.addWorkerRow(0);
