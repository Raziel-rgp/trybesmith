import { NextFunction, Request, Response } from 'express';
import productService from '../service/products.service';

const newProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const product = req.body;
    const result = await productService.newProduct(product);
    return res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

const getProducts = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await productService.getProducts();
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const productsController = { newProduct, getProducts };

export default productsController;
