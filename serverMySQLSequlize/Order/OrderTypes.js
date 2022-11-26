
import { INTEGER} from 'sequelize';
import { db } from '../dbConnect.js';




export const Orders = db.define('Orders', {

    idTable: {
        type: INTEGER,
        allowNull: false
    },
    idDish: {
        type: INTEGER,
        allowNull: false
    },
    quantity: {
        type:INTEGER, 
        allowNull: false
    },
})

 