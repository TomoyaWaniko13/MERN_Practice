import express from 'express';
import mongoose from 'mongoose';
const app = express();
const port = 8000;
import dotenv from 'dotenv';
import helmet from 'helmet';
import postRouter from './routers/posts.js';
import authRouter from './routers/auth.js';

dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(() => console.log('connected to DB'));

app.use(express.json());
app.use(helmet());
app.use('/api/auth', authRouter);
app.use('/api/posts', postRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
