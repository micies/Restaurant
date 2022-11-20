import { db } from "../index.js";
import { SQL } from "../PromiseSQL.js";


export const createTableDiners = (req, res, next) => {
  let sql =
    "CREATE TABLE Diners (id INT AUTO_INCREMENT PRIMARY KEY,`lastUpdated` TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, name VARCHAR(255), size VARCHAR(255), queue VARCHAR(255), reservations VARCHAR(255), table1 VARCHAR(255), sum VARCHAR(255))";

  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send("Table created");
  });
};

export const getAllDiners = (req, res) => {
  db.query("SELECT * FROM Diners", (err, result) => {
    if (err) throw err;
    res.send(result);
  });
};

export const getByIdDiners = (req, res, next, id) => {
  db.query(`SELECT * FROM Diners WHERE id = ${id}`,  (err, result) => {
    if (err) throw err;
    res.send(result);
  });
};

export const createDiner = (req, res, next, dataFromUser) => {

    let sql = `INSERT INTO Diners (name, size, queue, reservations, sum) VALUES ('${dataFromUser.name}', ${dataFromUser.size}, '${dataFromUser.queue}', '${dataFromUser.reservations}' ,  '${dataFromUser.sum}')`;
    db.query(sql, (err, result) => {
      if (err) {
        throw err
      }
     else{ console.log("test")
      res.send(dataFromUser)};
    });
};



export const sitByPeriority = async (req, res, next) => {
  let diners = await SQL(`SELECT * FROM Diners WHERE queue ='tobesited' ORDER BY size DESC ,lastUpdated`)
  let tables = await SQL(`SELECT * FROM TablesFood ORDER BY capacity `)

  chunkLoop: for (let diner of diners) {
     for (let table of tables) {

      if (diner.queue != "sit" && table.status == null) {
        if (diner.size <= table.capacity) {
          await SQL(`UPDATE Diners SET queue = 'sit', table1 =  '${table.id}' WHERE id = ${diner.id} `);
          await SQL(`UPDATE TablesFood SET status = '${diner.id}' WHERE id = ${table.id} `);
          break chunkLoop
          
        }
      }
    }
  }
  res.send("success");

}


export const updateDiner = (req, res, next, dataFromUser) => {

  const query = `UPDATE Diners SET name = '${dataFromUser.name}', size = '${dataFromUser.size}' WHERE id = ${dataFromUser.id} `;

  db.query(query, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
};


export const deleteDiner = (req, res, next, id) => {

  const query = `UPDATE TablesFood SET status = null  WHERE status = ${id} `;

  db.query(query,  (err, data) => {
    if (err) throw err;
  });

  const sql = `DELETE FROM Diners WHERE id = ${id}`;
  db.query(sql,  (err, result) => {
    if (err) throw err;
    res.send({numberId: id})
  });
};
