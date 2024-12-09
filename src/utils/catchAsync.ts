// function createOperation(func: (a:number,b:number) => number ) {
//   return func;
// }
// const add = createOperation((a, b) => a + b);
// const muliply = createOperation((a,b) => a*b)
// console.log(add(3, 5));
// console.log(muliply(3, 5));

import { NextFunction, Request, RequestHandler, Response } from 'express';

const catchAsync = (func: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(func(req, res, next)).catch((error) => next(error));
  };
};
export default catchAsync;
