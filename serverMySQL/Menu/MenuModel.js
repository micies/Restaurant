import { db } from "../dbConnect.js";
import { SQL } from "../PromiseSQL.js";




export const createTableMenu = (req, res, next) => {
  const sql = 
  "CREATE TABLE Menu (id INT AUTO_INCREMENT PRIMARY KEY,`lastUpdated` TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, id_category Int, nameMenu VARCHAR(255), price DECIMAL(10,2))";

  db.query(sql, function (err, result) {
      if (err) throw err;
      res.send("Table created");
  });

};

export const getAllMenu = (req, res) => {

const sql = "SELECT m.id, m.id_category, m.nameMenu, m.price, c.name FROM Menu as m INNER JOIN Category as c ON m.id_category=c.id_category";

db.query(sql, function (err, result) {
  if (err) throw err;
  res.send(result);
});
} 


export const getByIdMenu = async(req, res, next) => {
  
  const { id } = req.params;
  let menu = await SQL([`SELECT id, id_category, nameMenu, price FROM Menu WHERE id = ?`, [id]])
  console.log(menu)

  let category = await SQL([`SELECT name FROM Category WHERE id_category = ?`, [menu[0].id_category]])
  console.log(category[0].name)
  menu[0].id_category = category[0].name
  res.send(menu)
}


export const createMenu = (req, res, next) => {

  db.query('INSERT INTO Menu (id_category	, nameMenu, price) VALUES (?,?,?)',[req.body.id_category, req.body.nameMenu, req.body.price], (err, result) => {
    if (err) throw err;(result)
    res.send(result);;
  })
}


export const updateMenu = (req, res, next) => {
  const { id } = req.params;

  db.query('UPDATE Menu SET id_category	 = ?, nameMenu = ?, price = ? WHERE id = ?', [req.body.category, req.body.nameMenu, req.body.price, id], (err, data) => {
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

