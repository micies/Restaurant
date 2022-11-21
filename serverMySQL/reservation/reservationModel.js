import { db } from "../index.js";
import { SQL } from "../PromiseSQL.js";

export const calculateSumOrder = async (req, res, next) => {
    const { id } = req.params;
    let sumPrice = 0;

    const searchById = `SELECT * FROM Diners WHERE id =${id}`
    let result = await SQL(searchById)
    let reservationByMenu = [JSON.parse(result[0].reservations)];
    for (const [key, value] of Object.entries(reservationByMenu[0])) {
      const sum = `SELECT price FROM Menu WHERE id =${key}`
      let calculate = await SQL(sum)

      sumPrice = sumPrice + calculate[0].price * value
      console.log(calculate[0].price * value)
    }
    res.send({sum:`${sumPrice}`})
}


export const postReservation = (req, res, next) => {
  
  const { id } = req.params;
  const reservations = JSON.stringify(req.body.reservations);
  console.log(reservations, id)

  const query = `UPDATE Diners SET reservations = ${reservations} WHERE id = '${id}' `;

  db.query(query, (err, data) => {
    if (err) throw err;
    res.send(data)

  });
};

export const getReservation = (req, res, next) => {
  const { id } = req.params;

  db.query(`SELECT * FROM Diners WHERE id =${id}`,  (err, result) => {
    if (err) throw err;
    res.send(result[0].reservations);
  });
};

