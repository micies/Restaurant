import express from 'express';

import { createTable, deleteTable, getAllTables, getByIdTable, updateTable } from './TablesModel.js';



const TablesRouter  = express.Router();

TablesRouter.post("/tables", createTable)
TablesRouter.get("/tables", getAllTables)
TablesRouter.delete('/tables', deleteTable)
TablesRouter.put('/tables/:id', updateTable)
TablesRouter.get("/tables/:id", getByIdTable)
TablesRouter.delete('/tables/:id', deleteTable)

export default TablesRouter