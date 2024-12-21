import { NextFunction, Request, Response, Router } from 'express';
import { userController } from './user.controller';
import { UserValidation } from './user.validation';

const userRouter = Router();

userRouter.post(
  '/create-user',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      // console.log({ body: req.body });
      await UserValidation.userValidationSchema.parseAsync(req.body);
      // req.body = parsedBody
      // console.log({ parsedBody });
      next();
    } catch (err) {
      next(err);
    }
  },
  userController.createUser,
);
userRouter.get('/:userID', userController.getSingleUser);
userRouter.get('/', userController.getUser);
userRouter.put('/:userID', userController.updateUser);
userRouter.delete('/:userID', userController.deleteUser);

export default userRouter;
