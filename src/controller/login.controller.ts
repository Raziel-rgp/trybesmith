import { NextFunction, Request, Response } from 'express';
import loginService from '../service/login.service';

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await loginService.login(req.body);
    return res.json({ token: result });
  } catch (error) {
    next(error);
  }
};

const loginController = { login };

export default loginController;