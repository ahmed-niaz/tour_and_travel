import express, { Application, Request, Response } from 'express';
import userRouter from './modules/user/user.router';
import tourRouter from './modules/tour/tour.router';
import { StatusCodes } from 'http-status-codes';

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

app.use((err: any, req: Request, res: Response) => {
  console.log('error from app ts', err);
  res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ success: false, message: err.message, error: err });
});

export default app;
