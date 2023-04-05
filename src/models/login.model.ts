import { RowDataPacket } from 'mysql2';
import { User } from '../interfaces/user.interface';
import connection from './connection';

const getUserByName = async (username: string): Promise<User[]> => {
  const [result] = await connection.execute<User[] & RowDataPacket[]>(
    'SELECT * FROM Trybesmith.users WHERE username = ?',
    [username],
  );
  return result;
};

const getUserByPassword = async (password: string): Promise<User[]> => {
  const [result] = await connection.execute<User[] & RowDataPacket[]>(
    'SELECT * FROM Trybesmith.users WHERE password = ?',
    [password],
  );
  return result;
};

const loginModel = { getUserByName, getUserByPassword };

export default loginModel;