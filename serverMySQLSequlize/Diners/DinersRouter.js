import express from 'express';


import { getAllDiners, getByIdDiner, deleteDiner, updateDiner, createDiner, sitByPeriority } from './DinersModel.js';



const DinersRouter  = express.Router();
DinersRouter.get("/diners", getAllDiners)
DinersRouter.post("/diners", createDiner)
DinersRouter.get("/diners/sitbyperiority", sitByPeriority) //
DinersRouter.put('/diners/:id', updateDiner)
DinersRouter.get("/diners/:id", getByIdDiner)
DinersRouter.delete('/diners/:id', deleteDiner)

export default DinersRouter;