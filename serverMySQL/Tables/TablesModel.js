
import { db } from "../dbConnect.js";


export const createTableTasbles = (req, res, next) => {
  const sql = "CREATE TABLE TablesFood (id INT AUTO_INCREMENT PRIMARY KEY,`lastUpdated` TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, capacity VARCHAR(255), status VARCHAR(255))";
  db.query(sql, function (err, result) {
      if (err) throw err;
      res.send("Table created");
  });
};


export const getAllTasbles = (req, res, next) => {

  db.query("SELECT * FROM TablesFood", function (err, result, fields) {
    if (err) throw err;
    res.send(result);
  });
};



export const getByIdTable = (req, res, next) => {
  const { id } = req.params;
  db.query('SELECT * FROM TablesFood WHERE id = ?', [id], (err, result) => {
    if (err) throw err;
    res.send(result);
  });

}


export const createTable = (req, res, next) => {
  db.query('INSERT INTO TablesFood (capacity) VALUES (?)',[req.body.capacity],
   function (err, result) {
    if (err) throw err;
    res.send(result);;
    
  })
}




export const updateTable = (req, res, next) => {
  const { id } = req.params;
  db.query(`UPDATE TablesFood SET capacity = ? WHERE id = ? `[req.body.capacity, id], (err, data) => {

    if (err) throw err;
    res.send(data);;
  });
};


export const deleteTable = (req, res, next) => {
  const { id } = req.params;
    db.query('DELETE FROM TablesFood WHERE id = ?', [id], (err, result) => {
      if (err) throw err;
      res.send("Number of records deleted: " + result.affectedRows);
    });
}

