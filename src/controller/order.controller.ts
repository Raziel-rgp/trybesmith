/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from 'express';
import orderService from '../service/order.service';
import loginModel from '../models/login.model';
import token from '../middlewares/validateJWT';

const getOrders = async (_req: Request, res: Response) => {
  const result = await orderService.getOrders();
  return res.status(200).json(result);
};

const newOrders = async (req: Request, res: Response) => {
  const { authorization } = req.headers;
  const decode: any = token.verification(authorization as string);
  const { username } = decode;
  const [user] = await loginModel.getUserByName(username);
  const { id } = user;
  const { productsIds } = req.body;
  console.log('getUserController');
  if (!id) {
    throw new Error('error id');
  }
  const result = await orderService.newOrders(id, productsIds);
  return res.status(201).json(result);
};

const orderController = { getOrders, newOrders };

export default orderController;
