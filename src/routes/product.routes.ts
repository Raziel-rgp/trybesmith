import { Router } from 'express';
import productsController from '../controller/product.controller';
import { validateProductAmount } from '../middlewares/validations';

const router = Router();

router.post('/', validateProductAmount, productsController.newProduct);
router.get('/', productsController.getProducts);

export default router;