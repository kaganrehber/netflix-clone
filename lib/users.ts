interface User {
  email: string;
  password: string;
}

const users: User[] = [];

export function addUser(user: User): void {
  users.push(user);
}

export function getUsers(): User[] {
  return users;
}

export function findUserByEmail(email: String): User | undefined {
  return users.find((user) => user.email === email);
}
