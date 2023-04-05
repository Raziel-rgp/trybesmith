import { Request, Response } from 'express';
import orderService from '../service/order.service';

const getOrders = async (_req: Request, res: Response) => {
  const result = await orderService.getOrders();
  return res.status(200).json(result);
};

const orderController = { getOrders };

export default orderController;