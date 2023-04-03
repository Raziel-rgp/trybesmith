import jwt, { SignOptions } from 'jsonwebtoken';
import { User } from '../interfaces/user.interface';

const tokenKey = 'Sk2398MpOL92';

const secret = process.env.JWT_SECRET || tokenKey;

const jwtConfig: SignOptions = {
  algorithm: 'HS256',
  expiresIn: '365d',
};

const generator = (payload: User) => jwt.sign(payload, secret, jwtConfig);

const verification = (token: string) => jwt.verify(token, secret);

const token = { generator, verification };

export default token;