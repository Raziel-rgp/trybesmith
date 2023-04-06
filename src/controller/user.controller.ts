import { Request, Response } from 'express';
import userService from '../service/user.service';

const userCreate = async (req: Request, res: Response) => {
  const result = await userService.createUser(req.body);
  return res.status(201).json({ token: result });
};

const userController = { userCreate };

export default userController;