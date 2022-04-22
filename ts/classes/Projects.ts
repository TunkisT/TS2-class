interface ProjectInterface {
  finishProject(): void;
  readonly done: boolean;
  readonly price: number;
}

export default class Project implements ProjectInterface {
  static projectCount: number = 0;
  private _id: string;
  private _done: boolean = false;
  private _title: string;
  readonly price: number;

  constructor(title: string, price: number) {
    this._id = `pr_${++Project.projectCount}`;
    this._title = title;
    this.price = price;
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
