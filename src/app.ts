import express from 'express';
import productsRoute from './routes/product.routes';
import userRoute from './routes/user.routes';

const app = express();

app.use(express.json());

app.use('/products', productsRoute);
app.use('/users', userRoute);

export default app;
