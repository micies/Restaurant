import express from 'express';


import { calculateSumOrderController, getReservationController, postReservationController } from "./reservationController.js";


const ReservationRouter  = express.Router();

ReservationRouter.get('/diners/calculate/:id', calculateSumOrderController) 
ReservationRouter.post('/diners/reservation/:id', postReservationController)
ReservationRouter.get('/diners/getreservation/:id', getReservationController)


export default ReservationRouter;