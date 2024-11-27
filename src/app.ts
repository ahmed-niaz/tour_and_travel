import express, { Application, Request, Response } from 'express';
import userRouter from './modules/user/user.router';
import tourRouter from './modules/tour/tour.router';

const app: Application = express();
// middleware
app.use(express.json());

app.use('/api/user', userRouter);
app.use('/api/tour', tourRouter);

app.get('/', async (req: Request, res: Response) => {
  res.send({
    status: true,
    message: `tour & travel is ⚡`,
  });
});

export default app;
