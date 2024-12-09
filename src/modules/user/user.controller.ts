// manage request & response
// model -> controller

import { userService } from './user.service';
import sendResponse from '../../utils/sendResponse';
import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';

const createUser = catchAsync(async (req, res) => {
  const payload = req.body;
  const result = await userService.createUser(payload);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    message: 'user created successfully',
    data: result,
  });
});

// get user
const getUser = catchAsync(async (req, res) => {
  const result = await userService.getUser();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'user retrieved successfully',
    data: result,
  });
});

// get single user
const getSingleUser = catchAsync(async (req, res) => {
  const userID = req.params.userID;
  const result = await userService.getSingleUser(userID);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'user retrieved successfully',
    data: result,
  });
});

// update user
const updateUser = catchAsync(async (req, res) => {
  const userID = req.params.userID;
  const body = req.body;
  const result = await userService.updateUser(userID, body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'user updated successfully',
    data: result,
  });
});

// delete single user
const deleteUser = catchAsync(async (req, res) => {
  const userID = req.params.userID;
  await userService.deleteUser(userID);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'user deleted successfully',
    data: {},
  });
});

export const userController = {
  createUser,
  getUser,
  getSingleUser,
  updateUser,
  deleteUser,
};

// controller ---> routes
