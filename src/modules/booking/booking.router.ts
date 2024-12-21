import { Router } from 'express';
import { bookingController } from './booking.controller';

const bookingRouter = Router();

bookingRouter.post('/create-booking', bookingController.createBooking);
bookingRouter.get('/', bookingController.getBookings);

export default bookingRouter;
