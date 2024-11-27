import { Router } from 'express';
import { tourController } from './tour.controller';

const tourRouter = Router();

tourRouter.post('/create-tour', tourController.createTour);
tourRouter.get('/:tourID', tourController.getSingleTour);
tourRouter.get('/', tourController.getTours);
tourRouter.put('/:tourID', tourController.updateTour);
tourRouter.delete('/:tourID', tourController.deleteTour);

export default tourRouter;
