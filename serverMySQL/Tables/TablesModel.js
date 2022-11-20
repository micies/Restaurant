
import { db } from "../index.js";


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
  db.query(`SELECT * FROM TablesFood WHERE id = ${id}`, function (err, result) {
    if (err) throw err;
    res.send(result);
  });

}


export const createTable = (req, res, next, dataFromUser) => {
  const sql = `INSERT INTO TablesFood (capacity) VALUES ('${dataFromUser.capacity}') `
  db.query(sql, function (err, result) {
    if (err) throw err;
    res.send(result);;
  })
}


export const updateTable = (req, res, next, dataFromUser) => {
  const query = `UPDATE TablesFood SET capacity = ${dataFromUser.capacity} WHERE id = ${dataFromUser.id} `;
  db.query(query, function (err, data) {

    if (err) throw err;
    res.send(data);;
  });
};


export const deleteTable = (req, res, next) => {
  const { id } = req.params;
    const sql = `DELETE FROM TablesFood WHERE id = ${id}`;
    db.query(sql, function (err, result) {
      if (err) throw err;
      res.send("Number of records deleted: " + result.affectedRows);
    });
}

