import { NewProduct, Product } from '../interfaces/product.interface';
import productModel from '../models/products.model';

const newProduct = async (product: NewProduct): Promise<Product> => {
  const result = await productModel.newProduct(product);
  return result;
};

const productService = { newProduct };

export default productService;
