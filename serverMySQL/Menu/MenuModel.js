import { db } from "../index.js";




const table_name = 'Menu';
export const createTableMenu = (req, res, next) => {
  const sql = "CREATE TABLE Menu (id INT AUTO_INCREMENT PRIMARY KEY,`lastUpdated` TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, category VARCHAR(255), name VARCHAR(255), price VARCHAR(255))";
  db.query(sql, function (err, result) {
      if (err) throw err;
      res.send("Table created");
  });

};



export const getAllMenu = (req, res, next) => {
  db.query(`SELECT * FROM ${table_name}`, function (err, result, fields) {
    if (err) throw err;
    res.send(result);
  });
};



export const getByIdMenu = (req, res, next) => {
  const { id } = req.params;
  db.query(`SELECT * FROM ${table_name} WHERE id = ${id}`, function (err, result) {
    if (err) throw err;
    res.send(result);
  });

}


export const createMenu = (req, res, next) => {

  const sql = `INSERT INTO ${table_name} (category, name, price) VALUES ('${req.body.category}', '${req.body.name}', '${req.body.price}')`
  db.query(sql, function (err, result) {
    if (err) throw err;(result)
    res.send(result);;
  })
}


export const updateMenu = (req, res, next) => {
  const { id } = req.params;

  const query = `UPDATE ${table_name} SET category = '${req.body.category}', name = '${req.body.name}', price = '${req.body.price}' WHERE id = '${id}' `;
  db.query(query, function (err, data) {

    if (err) throw err;
    res.send(data);;
  });

};



export const deleteMenu = (req, res, next) => {
  const { id } = req.params;

    const sql = `DELETE FROM ${table_name} WHERE id = ${id}`;
    db.query(sql, function (err, result) {
      if (err) throw err;
      res.send("Number of records deleted: " + result.affectedRows);
    });

}

