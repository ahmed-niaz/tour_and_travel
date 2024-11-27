import { Request, Response } from 'express';
import { tourService } from './tour.service';

const createTour = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const result = await tourService.createTour(payload); // Add 'await'
    res.send({
      success: true,
      message: 'Tour created successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: 'Something went wrong',
      error,
    });
  }
};

const getTours = async (req: Request, res: Response) => {
  try {
    const result = await tourService.getTours(); // Add 'await'
    res.send({
      success: true,
      message: 'Tours retrieved successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: 'Something went wrong',
      error,
    });
  }
};

const getSingleTour = async (req: Request, res: Response) => {
  try {
    const tourID = req.params.tourID;
    const result = await tourService.getSingleTour(tourID); // Add 'await'
    res.send({
      success: true,
      message: 'Tour retrieved successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: 'Something went wrong',
      error,
    });
  }
};

const updateTour = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const tourID = req.params.tourID;
    const result = await tourService.updateTour(tourID, body); // Add 'await'
    res.send({
      success: true,
      message: 'Tour updated successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: 'Something went wrong',
      error,
    });
  }
};

const deleteTour = async (req: Request, res: Response) => {
  try {
    const tourID = req.params.tourID;
    const result = await tourService.deleteTour(tourID); // Add 'await'
    res.send({
      success: true,
      message: 'Tour deleted successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: 'Something went wrong',
      error,
    });
  }
};

export const tourController = {
  createTour,
  getTours,
  getSingleTour,
  updateTour,
  deleteTour,
};
