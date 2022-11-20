import { calculateSumOrder, getReservation, postReservation } from "./reservationModel.js";

export const calculateSumOrderController = (req, res, next) => {
    try {
        calculateSumOrder(req, res, next);
      } catch (error) {
        console.error(error);
      }
  };


  export const postReservationController = (req, res, next) => {
    try {
        postReservation(req, res,next);
      } catch (error) {
        console.error(error);
      }
  };



  export const getReservationController = (req, res, next) => {
    try {
        getReservation(req, res,next);
      } catch (error) {
        console.error(error);
      }
  };