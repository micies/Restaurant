
import { INTEGER, STRING } from 'sequelize';
import { db } from '../dbConnect.js';



export const Category = db.define('Category', {

    id_category: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: STRING,
        allowNull: true
    }
})



