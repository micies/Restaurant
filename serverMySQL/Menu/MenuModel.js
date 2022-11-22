import { db } from "../dbConnect.js";




export const createTableMenu = (req, res, next) => {
  const sql = "CREATE TABLE Menu (id INT AUTO_INCREMENT PRIMARY KEY,`lastUpdated` TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, category VARCHAR(255), name VARCHAR(255), price DECIMAL(10,2))";
  db.query(sql, function (err, result) {
      if (err) throw err;
      res.send("Table created");
  });

};


export const getAllMenu = (req, res, next) => {
  db.query('SELECT id, category, name, price FROM Menu', (err, result, fields) => {
    if (err) throw err;
    res.send(result);
  });
};



export const getByIdMenu = (req, res, next) => {
  
  const { id } = req.params;
  db.query('SELECT id, category, name, price FROM Menu WHERE id = ?',[id], (err, result) => {
    if (err) throw err;
    res.send(result);
  });

}


export const createMenu = (req, res, next) => {

  db.query('INSERT INTO Menu (category, name, price) VALUES (?,?,?)',[req.body.category, req.body.name, req.body.price], (err, result) => {
    if (err) throw err;(result)
    res.send(result);;
  })
}


export const updateMenu = (req, res, next) => {
  const { id } = req.params;

  db.query('UPDATE Menu SET category = ?, name = ?, price = ? WHERE id = ?', [req.body.category, req.body.name, req.body.price, id], (err, data) => {
    if (err) throw err;
    res.send(data);;
  });

};



export const deleteMenu = (req, res, next) => {
  const { id } = req.params;

    db.query('DELETE FROM Menu WHERE id = ?',[id], (err, result) => {
      if (err) throw err;
      res.send("Number of records deleted: " + result.affectedRows);
    });

}

