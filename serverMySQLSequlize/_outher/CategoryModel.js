import { db } from "../dbConnect.js";


export const getAllCategory = (req, res, next) => {
    db.query('SELECT name, id_category FROM Category', (err, result, fields) => {
      if (err) throw err;
      res.send(result);
    });
  };


export const getByIdCategory = (req, res, next) => {
    const { id } = req.params;
  
    db.query('SELECT name FROM Category WHERE id_category = ?',[id], (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  }
  
  
export const createCategory = (req, res, next) => {
  
    db.query('INSERT INTO Category (name) VALUES (?)',[req.body.name], (err, result) => {
      if (err) throw err;(result)
      res.send(result);;
    })
  }


export const updateCategory = (req, res, next) => {
    const { id } = req.params;
  
    db.query('UPDATE Category SET name = ?, WHERE id_category = ?', [req.body.name, id], (err, data) => {
      if (err) throw err;
      res.send(data);;
    });
  
  };

  
export const deleteCategory = (req, res, next) => {
    const { id } = req.params;

      db.query('DELETE FROM Category WHERE id_category = ?',[id], (err, result) => {
        if (err) throw err;
        res.send("Number of records deleted: " + result.affectedRows);
      });
  
  }
  