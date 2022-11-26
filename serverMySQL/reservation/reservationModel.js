import { db } from "../dbConnect.js";
import { SQL } from "../PromiseSQL.js";

export const calculateSumOrder = async (req, res, next) => {
    const { id } = req.params;
    let sumPrice = 0;
    let result = await SQL(['SELECT idDish, quantity FROM Orders WHERE idTable =?', [id]])

    for (const property of result) {
      let calculate = await SQL(['SELECT price FROM Menu WHERE id =?', [property["idDish"]]])
      sumPrice = sumPrice + calculate[0].price * property["quantity"]
      console.log(calculate[0].price * property["quantity"])
    }
    res.send({sum:`${sumPrice}`})
}


export const postReservation = (req, res, next) => {
  
  const { id } = req.params;
  db.query('DELETE FROM Orders WHERE idTable = ?',[id], (err, result) => {
    if (err) throw err;
  });

  const reservations = req.body.reservations;
  console.log(req.body)
   
  for (const [key, value] of Object.entries(reservations)) {
    SQL([`INSERT INTO Orders (idTable, idDish, quantity) VALUES (?, ?, ?)`,[id, key, value]])
  }

};

export const getReservation = (req, res, next) => {
  const { id } = req.params;

  db.query(`SELECT  idDish, quantity FROM Orders WHERE idTable =?`,[id],  (err, result) => {
    if (err) throw err;
    let dishes = {}
    console.log(result)
    for (let element of result){
      dishes[element['idDish']]= element['quantity']
    }

    res.send(dishes);
  });
};
