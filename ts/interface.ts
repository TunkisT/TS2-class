// type UserType = {
//   name: string;
//   id: number;
// };

interface User {
  name: string;
  id: number;
  role: 'admin' | 'editor';
}

interface ReadOnlyUser extends User {
  readonly name: string;
  readonly id: number;
  readonly role: 'admin' | 'editor';
}

const readU: ReadOnlyUser = {
  name: 'Jill',
  id: 47,
  role: 'editor',
};

// readU.role = 'admin';

interface AdminUser extends User {
  role: 'admin';
  logName(prefix: string): void;
  birthDate?: Date;
}

const user: User = {
  name: 'james',
  id: 15,
  role: 'admin',
};

const adUser: AdminUser = {
  name: 'Mike Admin',
  id: 55,
  role: 'admin',
  logName(prefix: string) {
    console.log(prefix);
  },
  //   birthDate: new Date('1980-01-01'),
};
