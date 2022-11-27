import express from 'express';

import {createCategory, getAllCategory, updateCategory, getByIdCategory, deleteCategory} from "./CategoryService.js"

const routerCategory  = express.Router();

routerCategory.post("/category", createCategory)
routerCategory.get("/category", getAllCategory)
routerCategory.put('/category/:id', updateCategory)
routerCategory.get("/category/:id", getByIdCategory)
routerCategory.delete('/category/:id', deleteCategory)



export default routerCategory;