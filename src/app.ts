import express, { ErrorRequestHandler } from 'express';
import productsRoute from './routes/product.routes';
import userRoute from './routes/user.routes';
import orderRoute from './routes/order.routes';
import loginRoute from './routes/login.routes';

const app = express();

app.use(express.json());

app.use('/products', productsRoute);
app.use('/users', userRoute);
app.use('/orders', orderRoute);
app.use('/login', loginRoute);
const errorMiddleware: ErrorRequestHandler = (error, _req, res, _next) => {
  console.log(error);
  return res.status(500).json({ message: error.message });
};
app.use(errorMiddleware);

export default app;
