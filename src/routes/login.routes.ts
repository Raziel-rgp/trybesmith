import { Router } from 'express';
import loginController from '../controller/login.controller';
import { validateLogin } from '../middlewares/validations';

const router = Router();

router.post('/', validateLogin, loginController.login);

export default router;