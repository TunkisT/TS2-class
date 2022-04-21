export default class EdEmployee {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.fullname = `${this.firstname} ${this.lastname}`;
        this.email = `${this.firstname}.${this.lastname}@company.com`.toLowerCase();
    }
}
