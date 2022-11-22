import { db } from "../dbConnect.js";
import { SQL } from "../PromiseSQL.js";

export const createTableOrders = (req, res, next) => {
    let sql =
      "CREATE TABLE Orders (idTable INT, idDish INT, quantity INT, pricePerDish INT)";

    db.query(sql, (err, result) => {
      if (err) throw err;
      res.send("Table created");
    });
  };

  export const createTableCategory = (req, res, next) => {
    let sql =
      "CREATE TABLE Category (Category VARCHAR(255), name VARCHAR(255))";

    db.query(sql, (err, result) => {
      if (err) throw err;
      res.send("Table created");
    });
  };