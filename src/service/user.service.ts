import userModel from '../models/user.model';
import token from '../middlewares/validateJWT';
import { NewUser } from '../interfaces/user.interface';

const createUser = async (user: NewUser) => {
  await userModel.newUser(user);
  return token.generator(user);
};

const userService = { createUser };

export default userService;