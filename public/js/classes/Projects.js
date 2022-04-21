export default class Project {
    constructor(title, price) {
        this.id = `id_${Math.floor(Math.random() * 100)}`;
        this.done = false;
        this.title = title;
        this.price = price;
    }
    finishProject() {
        this.done = true;
    }
}
