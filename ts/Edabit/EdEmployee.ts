export default class EdEmployee {
  firstname: string;
  lastname: string;
  fullname: string;
  email: string;
  constructor(firstname: string, lastname: string) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.fullname = `${this.firstname} ${this.lastname}`;
    this.email = `${this.firstname}.${this.lastname}@company.com`.toLowerCase();
  }
}
