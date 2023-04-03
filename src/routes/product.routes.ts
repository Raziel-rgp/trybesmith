import { Router } from 'express';
import productsController from '../controller/product.controller';

const router = Router();

router.post('/', productsController.newProduct);

export default router;