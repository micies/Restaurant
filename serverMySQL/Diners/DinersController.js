import { createDiner, deleteDiner, getAllDiners, getByIdDiners, sitByPeriority, updateDiner } from "./DinersModel.js";



export const getAllDinersController = (req, res, next) => {  
    try {
        getAllDiners(req, res, next);
      } catch (error) {
        console.error(error);

      }
};

export const getByIdDinersController = (req, res, next) => {
    try {
        getByIdDiners(req, res,next);
      } catch (error) {
        console.error(error);
      }
  };
  
  export const createDinerController = (req, res, next) => {

    try {
        createDiner(req, res,next);
      } catch (error) {
        console.error(error);
      }
  };

  export const updateDinerController = (req, res, next) => {

      try {
        updateDiner(req, res,next);
      } catch (error) {
        console.error(error);
      }
  };

  export const deleteDinerController = (req, res, next) => {
    try {
        deleteDiner(req, res,next);
      } catch (error) {
        console.error(error);
      }

  };

  export const sitByPeriorityController = (req, res, next) => {
    try {
      sitByPeriority(req, res,next);
      } catch (error) {
        console.error(error);
      }

  };
  