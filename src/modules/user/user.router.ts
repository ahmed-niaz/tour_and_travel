import { Router } from 'express';
import { userController } from './user.controller';

const userRouter = Router();

userRouter.post('/create-user', userController.createUser);
userRouter.get('/', userController.getUser);
userRouter.get('/:userID', userController.getSingleUser);
userRouter.put('/:userID', userController.updateUser);
userRouter.delete('/:userID', userController.deleteUser);

export default userRouter;
