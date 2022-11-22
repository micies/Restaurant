import { createCategory, deleteCategory, getAllCategory, getByIdCategory, updateCategory } from "./CategoryModel.js";



export const getAllCategoryController = (req, res, next) => {  
    try {
        getAllCategory(req, res, next);
      } catch (error) {
        console.error(error);

      }
};

export const getByIdCategoryController = (req, res, next) => {
    try {
        getByIdCategory(req, res,next);
      } catch (error) {
        console.error(error);
      }
  };
  
  export const createCategoryController = (req, res, next) => {

    try {
      createCategory(req, res,next);
      } catch (error) {
        console.error(error);
      }
  };

  export const updateCategoryController = (req, res, next) => {

      try {
        updateCategory(req, res,next);
      } catch (error) {
        console.error(error);
      }
  };

  export const deleteCategoryController = (req, res, next) => {
    try {
      deleteCategory(req, res,next);
      } catch (error) {
        console.error(error);
      }

  };
