import { NextFunction, Request, Response } from 'express';
import userService from '../service/user.service';

const userCreate = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await userService.createUser(req.body);
    return res.status(201).json({ token: result });
  } catch (error) {
    next(error);
  }
};

const userController = { userCreate };

export default userController;