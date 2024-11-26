// manage request & response
// model -> controller

import { Request, Response } from 'express';
import { userService } from './user.service';

const createUser = async (req: Request, res: Response) => {
  try {
    // receive user data
    const payload = req.body;

    const result = await userService.createUser(payload);
    res.json({
      status: true,
      message: 'user created successfully',
      data: result,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'something went wrong',
      error,
    });
  }
};

// get user
const getUser = async (req: Request, res: Response) => {
  try {
    const result = await userService.getUser();
    res.send({
      status: true,
      message: 'Users getting successfully',
      result,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'something went wrong',
      error,
    });
  }
};

// get single user
const getSingleUser = async (req: Request, res: Response) => {
  try {
    const userID = req.params.userID;
    const result = await userService.getSingleUser(userID);

    res.send({
      status: true,
      message: 'Get single user successfully',
      result,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'something went wrong',
      error,
    });
  }
};
// update user
const updateUser = async (req: Request, res: Response) => {
  try {
    const userID = req.params.userID;
    const body = req.body;
    const result = await userService.updateUser(userID, body);
    res.send({
      status: true,
      message: 'User updated successfully',
      result,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'something went wrong',
      error,
    });
  }
};
// get single user
const deleteUser = async (req: Request, res: Response) => {
  try {
    const userID = req.params.userID;
    await userService.deleteUser(userID);
    res.send({
      status: true,
      message: 'User deleted successfully',
      result: {},
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'something went wrong',
      error,
    });
  }
};

export const userController = {
  createUser,
  getUser,
  getSingleUser,
  updateUser,
  deleteUser,
};

// controller ---> routes
