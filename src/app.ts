import express, { Application, Request, Response } from 'express';
import userRouter from './modules/user/user.router';
import tourRouter from './modules/tour/tour.router';
// import { StatusCodes } from 'http-status-codes';
import bookingRouter from './modules/booking/booking.router';
import { globalErrorHandler } from './middlewares/globalErrorHandler';

const app: Application = express();
// middleware
app.use(express.json());

app.use('/api/user', userRouter);
app.use('/api/tour', tourRouter);
app.use('/api/booking', bookingRouter);

app.get('/', async (req: Request, res: Response) => {
  res.send({
    status: true,
    message: `tour & travel is ⚡`,
  });
});

app.use(globalErrorHandler);

app.use('*', (req: Request, res: Response) => {
  res.status(404).json({
    status: false,
    message: `Route not found`,
  });
});

export default app;
