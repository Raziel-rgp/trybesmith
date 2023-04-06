import { RowDataPacket, ResultSetHeader } from 'mysql2';
import { Order } from '../interfaces/orders.interface';
import { User } from '../interfaces/user.interface';
import connection from './connection';

const getOrders = async ():Promise<Order[]> => {
  const [result] = await connection.execute<Order[] & RowDataPacket[]>(
    `SELECT o.id, o.user_id AS userId, JSON_ARRAYAGG(p.id) AS productsIds 
    FROM Trybesmith.orders as o
    INNER JOIN Trybesmith.products AS p 
    on o.id = p.order_id
    GROUP BY o.id;`,
  );
  return result;
};

const newOrders = async (userId: number): Promise<number> => {
  console.log('newOrders', userId);
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.orders (user_id) VALUE (?)',
    [userId],
  );
  const { insertId } = result;
  return insertId;
};

const update = async (newOrder:number, productId: number): Promise<void> => {
  console.log('update', newOrder, productId);
  await connection.execute<ResultSetHeader>(
    'UPDATE Trybesmith.products SET order_id = ? WHERE id = ?',
    [newOrder, productId],
  );
};

const getUserById = async (id: number): Promise<User[]> => {
  const [result] = await connection.execute<User[] & RowDataPacket[]>(
    'SELECT * FROM Trybesmith.users WHERE id = ?',
    [id],
  );
  return result;
};

const orderModel = { getOrders, newOrders, update, getUserById };

export default orderModel;
