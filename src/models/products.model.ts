import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { NewProduct, Product } from '../interfaces/product.interface';
import connection from './connection';

const newProduct = async (product: NewProduct): Promise<Product> => {
  const { name, amount } = product;
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
    [name, amount],
  );
  return { id: insertId, ...product };
};

const getProduct = async (): Promise<Product[]> => {
  const [result] = await connection.execute<Product[] & RowDataPacket[]>(
    'SELECT * FROM Trybesmith.products',
  );
  return result;
};
const productModel = { newProduct, getProduct };

export default productModel;