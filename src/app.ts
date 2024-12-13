import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import productRoutes from './routes/product.route';
import articleRoutes from './routes/articleRoutes';
import { handleErrors } from './utils/globalErrorHandler';
import requestLogger from './utils/requestLogger';
import responseLogger from './utils/responseLogger';

dotenv.config();
const app = express();

const corsOptions = {
  origin: [
    'http://localhost:3000',
    'https://welcome-to-pandamarket.netlify.app'
  ]
};

app.use(express.json());
app.use(cors(corsOptions));

app.use(requestLogger);
app.use(responseLogger);

app.use('/products', productRoutes);
app.use('/articles', articleRoutes);

app.use(handleErrors);

app.listen(process.env.PORT, () => console.log('server on'));
