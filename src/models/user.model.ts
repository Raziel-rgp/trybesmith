import { ResultSetHeader, RowDataPacket } from 'mysql2';
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

const getUser = async (): Promise<User[]> => {
  const [result] = await connection.execute<User[] & RowDataPacket[]>(
    'SELECT * FROM Trybesmith.users',
  );
  return result;
};

const userModel = { newUser, getUser };

export default userModel;