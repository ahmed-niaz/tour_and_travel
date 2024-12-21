import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { bookingService } from './booking.service';

const createBooking = catchAsync(async (req, res) => {
  const payload = req.body;
  const result = await bookingService.createBooking(payload);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Booking updated Successfully',
    data: result,
  });
});

const getBookings = catchAsync(async (req, res) => {
  const result = await bookingService.getBookings();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Booking retrieved Successfully',
    data: result,
  });
});

export const bookingController = {
  createBooking,
  getBookings,
};
