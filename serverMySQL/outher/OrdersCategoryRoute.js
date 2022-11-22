import express from 'express';
import { createCategoryController, deleteCategoryController, getAllCategoryController, getByIdCategoryController, updateCategoryController } from './CategoryController.js';
import { createTableCategory, createTableOrders } from './TableOrdersCategory.js';


const OutherRouter  = express.Router();

OutherRouter.get("/orders/createtable", createTableOrders);
OutherRouter.get("/category/createtable", createTableCategory);

OutherRouter.post("/category", createCategoryController)
OutherRouter.get("/category", getAllCategoryController)
OutherRouter.put('/category/:id', updateCategoryController)
OutherRouter.get("/category/:id", getByIdCategoryController)
OutherRouter.delete('/category/:id', deleteCategoryController)


export default OutherRouter;