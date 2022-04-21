interface ProjectInterface {
  id: string;
  done: boolean;
  title: string;
  price: number;
}

export default class Project implements ProjectInterface {
  id: string;
  done: boolean;
  title: string;
  price: number;
  constructor(title: string, price: number) {
    this.id = `id_${Math.floor(Math.random() * 100)}`;
    this.done = false;
    this.title = title;
    this.price = price;
  }
  finishProject() {
    this.done = true;
  }
}
