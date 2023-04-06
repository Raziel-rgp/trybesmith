import { Router } from 'express';
import orderController from '../controller/order.controller';
import token from '../middlewares/validateJWT';
import { validateOrder } from '../middlewares/validations';

const router = Router();

router.get('/', orderController.getOrders);
router.post('/', token.tokenValidator, validateOrder, orderController.newOrders);

export default router;
