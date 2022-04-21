export default class EdEmployee {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    fullname() {
        return `${this.firstname} ${this.lastname}`;
    }
    email() {
        return `${this.firstname}.${this.lastname}@company.com`.toLowerCase();
    }
}
