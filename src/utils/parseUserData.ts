import { User } from '../types/userTypes';

function ParseData(users: User[]) {
  return users.map((user) => ({
    id: user.id.name,
    name: `${user.name.first} ${user.name.last}`,
    age: user.dob.age,
    gender: user.gender,
  }));
}

export default ParseData;
