
import cors from "cors";
import express from "express";
import routerMenu from "./Menu/MenuRouter.js";
import DinersRouter from './Diners/DinersRouter.js'
import TablesRouter from './Tables/TablesRouter.js'
import mysql from 'mysql'
import ReservationRouter from "./reservation/reservationRouter.js";


const app = express();

export const db = mysql.createConnection({
    host: "sql12.freesqldatabase.com",
    user: 'sql12578515',
    password: '7EKSwLu79j',
    database: "sql12578515",
    Port: 3306
})

db.connect((error) => {

    if (error) {
        throw error;
    }
});

const port = process.env.PORT || 4000;
app.use(cors());

app.use(express.json());
app.use(routerMenu);
app.use(DinersRouter)
app.use(TablesRouter)
app.use(ReservationRouter)


app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});