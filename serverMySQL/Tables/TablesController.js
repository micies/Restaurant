import { createTable, deleteTable, getAllTasbles, getByIdTable, updateTable} from "./TablesModel.js";



export const getAllTablesController = (req, res, next) => {  
    try {
        getAllTasbles(req, res, next);
      } catch (error) {
        console.error(error);

      }
};


export const getByIdTableController = (req, res, next) => {
    const { id } = req.params;
    try {
        getByIdTable(req, res,next, id);
      } catch (error) {
        console.error(error);
      }
  };
  

  export const createTableController = (req, res, next) => {
    const dataFromUser = {
      "capacity": req.body.capacity
    }
    try {
      createTable(req, res,next, dataFromUser);
      } catch (error) {
        console.error(error);
      }
  };


  export const updateTableController = (req, res, next) => {
    const { id } = req.params;
    const dataFromUser = {
      capacity: req.body.capacity,
      id: JSON.stringify(id)};
      try {
        updateTable(req, res,next, dataFromUser);
      } catch (error) {
        console.error(error);
      }
  };


  export const deleteTableController = (req, res, next) => {
    const { id } = req.params;
    try {
      deleteTable(req, res,next, id);
      } catch (error) {
        console.error(error);
      }

  };
