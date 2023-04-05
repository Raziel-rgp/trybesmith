import { Login } from '../interfaces/login.interface';
import token from '../middlewares/validateJWT';

const login = async (data: Login) => token.generator(data);

const loginService = { login };

export default loginService;