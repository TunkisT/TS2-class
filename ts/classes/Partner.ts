import Person from './Person.js';
import Project from './Projects.js';
export default class Partner extends Person {
  private _projects: Project[] = [];

  constructor(name: string, age: number) {
    super(name, age);
  }

  addProject(prObj: Project): void {
    // patikrinti as prObj yra sukurtas pagal project klase
    if (prObj instanceof Project) {
      this._projects.push(prObj);
    } else {
      console.log('Not instance of project class');
    }
  }
  workDone(prId: string): void {
    // surasti tarp _project ta obj kurio id === prId
    const found: Project | undefined = this._projects.find(
      (prObj: Project) => prObj.id === prId
    );
    if (!found) {
      console.log('project not found', prId);
      return;
    }
    console.log('found ===', found);
    found.finishProject();
  }

  calcPay(): number {
    // atrinkti is _projects pabaigtus darbus (filter) ++
    const found: Project = this._projects.filter(
      (prObj: Project) => prObj.done === true
    );
    console.log('found ===', found);

    // susumuoti atliktu darbu price (reduce, forEach, map) ++
    let payment: number = 0;
    found.forEach((sumObj: number) => {
      payment += sumObj._price;
    });

    // is _projects istrinti atliktu darbus (filter)

    console.log('this._projects before ===', this._projects);

    this._projects = this._projects.filter(
      (prObj: Project) => prObj.done === false
    );
    console.log('this._projects after ===', this._projects);

    // pranesti konsoleje apie ismokejima ++
    // grazinti moketina suma ++
    console.log(`Payment for ${this.name} : ${payment} $`);
    return payment;
  }
}
