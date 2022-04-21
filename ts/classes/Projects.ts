interface ProjectInterface {
  finishProject(): void;
}

export default class Project implements ProjectInterface {
  static projectCount: number = 0;
  private _id: string;
  private _done: boolean;
  private _title: string;
  private _price: number;

  constructor(title: string, price: number) {
    this._id = `id_${++Project.projectCount}`;
    this._done = false;
    this._title = title;
    this._price = price;
  }
  // geteris gaut statusa isoreje
  get done(): boolean {
    return this._done;
  }

  get id(): string {
    return this._id;
  }

  finishProject() {
    this._done = true;
  }
}

const pr1 = new Project('footer', 150);
