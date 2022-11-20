import { createDiner, deleteDiner, getAllDiners, getByIdDiners, sitByPeriority, updateDiner } from "./DinersModel.js";



export const getAllDinersController = (req, res, next) => {  
    try {
        getAllDiners(req, res, next);
      } catch (error) {
        console.error(error);

      }
};

export const getByIdDinersController = (req, res, next) => {
    const { id } = req.params;
    try {
        getByIdDiners(req, res,next, id);
      } catch (error) {
        console.error(error);
      }
  };
  
  export const createDinerController = (req, res, next) => {
    const dataFromUser = {
      name: req.body.name,
      size: req.body.size,
      queue: "tobesited", 
      reservations: "{}",
      sum: 0,
    };
    console.log(dataFromUser)
    try {
        createDiner(req, res,next, dataFromUser);
      } catch (error) {
        console.error(error);
      }
  };

  export const updateDinerController = (req, res, next) => {
    const { id } = req.params;

    const dataFromUser = {
        name: req.body.name,
        size: req.body.size,
        id: JSON.stringify(id)
      };
      try {
        updateDiner(req, res,next, dataFromUser);
      } catch (error) {
        console.error(error);
      }
  };

  export const deleteDinerController = (req, res, next) => {
    const { id } = req.params;
    try {
        deleteDiner(req, res,next, id);
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
  