import { Request, Response } from 'express';
import loginService from '../service/login.service';

const login = async (req: Request, res: Response) => {
  const result = await loginService.login(req.body);
  return res.json({ token: result });
};

const loginController = { login };

export default loginController;