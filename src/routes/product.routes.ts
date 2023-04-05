import { Router } from 'express';
import productsController from '../controller/product.controller';
import { validateProduct } from '../middlewares/validations';

const router = Router();

router.post('/', validateProduct, productsController.newProduct);
router.get('/', productsController.getProducts);

export default router;