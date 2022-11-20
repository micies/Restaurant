import express from 'express';

import { createTableController, deleteTableController, getAllTablesController, getByIdTableController, updateTableController } from './TablesController.js';
import { createTableTasbles } from './TablesModel.js';



const TablesRouter  = express.Router();

TablesRouter.get("/tables/createtable", createTableTasbles);
TablesRouter.post("/tables", createTableController)
TablesRouter.get("/tables", getAllTablesController)
TablesRouter.delete('/tables', deleteTableController)
TablesRouter.put('/tables/:id', updateTableController)
TablesRouter.get("/tables/:id", getByIdTableController)
TablesRouter.delete('/tables/:id', deleteTableController)

export default TablesRouter