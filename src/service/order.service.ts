import orderModel from '../models/order.model';
import { Order } from '../interfaces/orders.interface';

const getOrders = async (): Promise<Order[]> => orderModel.getOrders();

const newOrders = async (userId: number, productsIds: number[]) => {
  const result = await orderModel.newOrders(userId);
  await Promise.all(productsIds.map((e) => orderModel.update(result, e)));
  return { userId, productsIds };
};

const orderService = { getOrders, newOrders };

export default orderService;