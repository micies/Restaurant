import express from 'express';

import { createDinerController, deleteDinerController, getAllDinersController, getByIdDinersController, sitByPeriorityController, updateDinerController } from './DinersController.js';

import { createTableDiners } from './DinersModel.js';



const DinersRouter  = express.Router();
DinersRouter.get("/diners/createtable", createTableDiners);
DinersRouter.get("/diners", getAllDinersController)
DinersRouter.post("/diners", createDinerController)
DinersRouter.get("/diners/sitbyperiority", sitByPeriorityController) //
DinersRouter.put('/diners/:id', updateDinerController)
DinersRouter.get("/diners/:id", getByIdDinersController)
DinersRouter.delete('/diners/:id', deleteDinerController)

export default DinersRouter;