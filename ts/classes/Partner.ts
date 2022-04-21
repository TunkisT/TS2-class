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
      (prObj) => prObj.id === prId
    );
    if (!found) {
      console.log('project not found', prId);
      return;
    }
    console.log('found ===', found);
    found.finishProject()
  }

  calcPay(): number {
    // atrinkti is _projects pabaigtus darbus filter
    // susumuoti atliktu darbu price reduce,foreach,map
    // is projects istrinti atliktus darbus
    // cons.log apie ismokejima
    // grazinti suma
    return 1;
  }
}
