import express from 'express';

import {createMenu, getAllMenu, updateMenu, getByIdMenu, deleteMenu, ss} from "./MenuModel.js"

const routerMenu  = express.Router();

routerMenu.post("/menu", createMenu)
routerMenu.get("/menu", getAllMenu)
routerMenu.put('/menu/:id', updateMenu)
routerMenu.get("/menu/:id", getByIdMenu)
routerMenu.delete('/menu/:id', deleteMenu)
routerMenu.get('/ss', ss)




routerMenu.get("/", (req, res) => {
  res.send("Let's build a CRUD API!");
});

export default routerMenu;