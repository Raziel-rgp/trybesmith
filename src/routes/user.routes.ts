import { Router } from 'express';
import userController from '../controller/user.controller';

const router = Router();

router.post('/', userController.userCreate);

export default router;