import { createTable, deleteTable, getAllTasbles, getByIdTable, updateTable } from "./TablesModel.js";



export const getAllTablesController = (req, res, next) => {
  try {
    getAllTasbles(req, res, next);
  } catch (error) {
    console.error(error);

  }
};


export const getByIdTableController = (req, res, next) => {
  try {
    getByIdTable(req, res, next);
  } catch (error) {
    console.error(error);
  }
};


export const createTableController = (req, res, next) => {

  try {
    createTable(req, res, next);
  } catch (error) {
    console.error(error);
  }
};


export const updateTableController = (req, res, next) => {

  try {
    updateTable(req, res, next);
  } catch (error) {
    console.error(error);
  }
};


export const deleteTableController = (req, res, next) => {
  try {
    deleteTable(req, res, next);
  } catch (error) {
    console.error(error);
  }

};
