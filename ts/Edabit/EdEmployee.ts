export default class EdEmployee {
  firstname: string;
  lastname: string;
  constructor(firstname: string, lastname: string) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
  fullname(): string {
    return `${this.firstname} ${this.lastname}`;
  }
  email(): string {
    return `${this.firstname}.${this.lastname}@company.com`.toLowerCase();
  }
}
