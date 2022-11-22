import e from "cors";
import { db } from "../dbConnect.js";
import { SQL } from "../PromiseSQL.js";

export const calculateSumOrder = async (req, res, next) => {
    const { id } = req.params;
    let sumPrice = 0;

    let result = await SQL('SELECT * FROM Diners WHERE id =?', [id])
    const reservationByMenu = [JSON.parse(result[0].reservations)];
    for (const [key, value] of Object.entries(reservationByMenu[0])) {
      let calculate = await SQL('SELECT price FROM Menu WHERE id =?', [key])
      sumPrice = sumPrice + calculate[0].price * value
      console.log(calculate[0].price * value)
    }
    res.send({sum:`${sumPrice}`})
}


export const postReservation = (req, res, next) => {
  
  const { id } = req.params;
  db.query('DELETE FROM Orders WHERE idTable = ?',[id], (err, result) => {
    if (err) throw err;
  });

  const reservations = req.body.reservations;
   
  for (const [key, value] of Object.entries(reservations)) {
    SQL(`INSERT INTO Orders (idTable, idDish, quantity) VALUES (${id}, ${key}, ${value})`)
  }

};

export const getReservation = (req, res, next) => {
  const { id } = req.params;

  db.query(`SELECT  idDish, quantity FROM Orders WHERE idTable =${id}`,  (err, result) => {
    if (err) throw err;
    let dishes = {}
    for (let element of result){
      dishes[element['idDish']]= element['quantity']
    }

    res.send(dishes);
  });
};
