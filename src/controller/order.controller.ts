import { NextFunction, Request, Response } from 'express';
import orderService from '../service/order.service';

const getOrders = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await orderService.getOrders();
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const orderController = { getOrders };

export default orderController;