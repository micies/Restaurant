
import { createMenu, deleteMenu, getAllMenu, getByIdMenu, updateMenu  } from "./MenuModel.js";



export const getAllMenuController = (req, res, next) => {  
    try {
        getAllMenu(req, res, next);
      } catch (error) {
        console.error(error);

      }
};

export const getByIdMenuController = (req, res, next) => {
    try {
        getByIdMenu(req, res,next);
      } catch (error) {
        console.error(error);
      }
  };
  
  export const createMenuController = (req, res, next) => {

    try {
      createMenu(req, res,next);
      } catch (error) {
        console.error(error);
      }
  };

  export const updateMenuController = (req, res, next) => {

      try {
        updateMenu(req, res,next);
      } catch (error) {
        console.error(error);
      }
  };

  export const deleteMenuController = (req, res, next) => {
    try {
      deleteMenu(req, res,next);
      } catch (error) {
        console.error(error);
      }

  };
