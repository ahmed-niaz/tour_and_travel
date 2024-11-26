import express, { Request, Response } from 'express';
import userRouter from './modules/user/user.router';

const app = express();
// middleware
app.use(express.json());

app.use('/api/user', userRouter);

app.get('/', async (req: Request, res: Response) => {
  res.send({
    status: true,
    message: `tour & travel is ⚡`,
  });
});

export default app;
