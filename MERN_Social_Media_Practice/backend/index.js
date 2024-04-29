import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import postRouter from './routers/posts.js';
import authRouter from './routers/auth.js';
import userRouter from './routers/users.js';

const app = express();
const port = 8000;

dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(() => console.log('connected to DB'));

app.use(express.json());
app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use('/api/posts', postRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
