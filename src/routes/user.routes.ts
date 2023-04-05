import { Router } from 'express';
import userController from '../controller/user.controller';
import { validateUser } from '../middlewares/validations';

const router = Router();

router.post('/', validateUser, userController.userCreate);

export default router;