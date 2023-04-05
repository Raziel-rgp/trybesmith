import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import loginModel from '../models/login.model';

const loginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

const productSchema = Joi.object({
  name: Joi.string().required().min(3),
  amount: Joi.string().required().min(3),
});

const validateProductAmount = (req: Request, res: Response, next: NextFunction) => {
  const { error } = productSchema.validate(req.body);
  if (error) {
    if (error.details[0].type === 'any.required') {
      return res.status(400).json({ message: error.details[0].message });
    } 
    return res.status(422).json({ message: error.details[0].message });
  }
  next();
};

const validateLogin = async (req: Request, res: Response, next: NextFunction) => {
  const { error } = loginSchema.validate(req.body);
  if (error) {
    return res.status(400).send({ message: error.details[0].message });
  }
  const userName = await loginModel.getUserByName(req.body.username);
  const userPassword = await loginModel.getUserByPassword(req.body.password);
  if (userName.length === 0 || userPassword.length === 0) {
    return res.status(401).send({ message: 'Username or password invalid' });
  }
  next();
};

export { loginSchema, validateLogin, validateProductAmount };