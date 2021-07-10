import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'haqiyousef@gmail.com',
    password: bcrypt.hashSync('jacoShopper113', 10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Jane Doe',
    email: 'Jane@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
