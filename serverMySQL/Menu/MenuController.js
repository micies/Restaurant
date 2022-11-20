
import { createMenu, deleteMenu, getAllMenu, getByIdMenu, updateMenu  } from "./MenuModel.js";



export const getAllMenuController = (req, res, next) => {  
    try {
        getAllMenu(req, res, next);
      } catch (error) {
        console.error(error);

      }
};

export const getByIdMenuController = (req, res, next) => {
    const { id } = req.params;
    try {
        getByIdMenu(req, res,next, id);
      } catch (error) {
        console.error(error);
      }
  };
  
  export const createMenuController = (req, res, next) => {
    const dataFromUser = {
      "category": req.body.category,
      "name": req.body.name,
      "price": req.body.price
    }

    try {
      createMenu(req, res,next, dataFromUser);
      } catch (error) {
        console.error(error);
      }
  };

  export const updateMenuController = (req, res, next) => {
    const { id } = req.params;

    const dataFromUser = {
      category: req.body.name,
      name: req.body.size,
      price: req.body.price,
      id: JSON.stringify(id)
      };
      try {
        updateMenu(req, res,next, dataFromUser);
      } catch (error) {
        console.error(error);
      }
  };

  export const deleteMenuController = (req, res, next) => {
    const { id } = req.params;
    try {
      deleteMenu(req, res,next, id);
      } catch (error) {
        console.error(error);
      }

  };
