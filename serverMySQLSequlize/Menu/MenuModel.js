
import { INTEGER, STRING, DATE, DECIMAL } from 'sequelize';
import { db } from '../dbConnect.js';



export const Menu = db.define('Menu', {

    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    lastUpdated: {
        type: DATE,
        allowNull: true
    },
    id_category: {
        type: INTEGER,
        allowNull: true
    },
    nameMenu: {
        type: STRING,
        allowNull: true
    },
    price: {
        type: DECIMAL(10,2), 
        allowNull: true

    }
})




