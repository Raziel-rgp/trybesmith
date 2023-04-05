import orderModel from '../models/order.model';
import { Order } from '../interfaces/orders.interface';

const getOrders = async (): Promise<Order[]> => orderModel.getOrders();

const orderService = { getOrders };

export default orderService;