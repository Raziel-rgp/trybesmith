import { RowDataPacket } from 'mysql2';
import { Order } from '../interfaces/orders.interface';
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

const orderModel = { getOrders };

export default orderModel;