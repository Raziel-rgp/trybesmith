/* eslint-disable @typescript-eslint/no-explicit-any */

import jwt, { SignOptions } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { User } from '../interfaces/user.interface';
import loginModel from '../models/login.model';

const tokenKey = 'Sk2398MpOL92';

const secret = process.env.JWT_SECRET || tokenKey;

const jwtConfig: SignOptions = {
  algorithm: 'HS256',
  expiresIn: '365d',
};

const generator = (payload: User) => jwt.sign(payload, secret, jwtConfig);

const verification = (token: string) => jwt.verify(token, secret);

const tokenValidator = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  
  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const decode: any = verification(authorization);
    
    const user = await loginModel.getUserByName(decode.username);
    if (decode.username === user[0].username) { 
      return next();
    }
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

const token = { generator, verification, tokenValidator };

export default token;