import { ResultSetHeader } from 'mysql2';
import { NewUser, User } from '../interfaces/user.interface';
import connection from './connection';

const newUser = async (user: NewUser): Promise<User> => {
  const { username, vocation, level, password } = user;
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
    [username, vocation, level, password],
  );
  return { id: insertId, ...user };
};

const userModel = { newUser };

export default userModel;
