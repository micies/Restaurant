
import { INTEGER, DATE } from 'sequelize';
import { db } from '../dbConnect.js';



export const Tables = db.define('TablesFood', {



    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    lastUpdated: {
        type: DATE,
        allowNull: true
    },
    capacity: {
        type: INTEGER,
        allowNull: false
    },
    status: {
        type: INTEGER,
        allowNull: true
    }

})

