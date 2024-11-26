import express, { Request, Response } from 'express';

const app = express();

app.get('/', async (req: Request, res: Response) => {
  res.send({
    status: true,
    message: `tour & travel is ⚡`,
  });
});

export default app;
