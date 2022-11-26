import express from 'express';

import { createMenuController, deleteMenuController, getAllMenuController, getByIdMenuController, updateMenuController } from './MenuController.js';
import { createTableMenu} from './MenuModel.js';


const routerMenu  = express.Router();

routerMenu.get("/menu/createtable", createTableMenu);
routerMenu.post("/menu", createMenuController)
routerMenu.get("/menu", getAllMenuController)
routerMenu.put('/menu/:id', updateMenuController)
routerMenu.get("/menu/:id", getByIdMenuController)
routerMenu.delete('/menu/:id', deleteMenuController)





routerMenu.get("/", (req, res) => {
  res.send("Let's build a CRUD API!");
});

export default routerMenu;