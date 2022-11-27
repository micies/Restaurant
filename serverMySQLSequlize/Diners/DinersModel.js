
import { INTEGER, STRING, DATE } from 'sequelize';
import { db } from '../dbConnect.js';




export const Diners = db.define('Diners', {
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    lastUpdated: {
        type: DATE,
        allowNull: true
    },
    name: {
        type: STRING,
        allowNull: true
    },
    size: {
        type: INTEGER,
        allowNull: true
    },
    queue: {
        type: STRING,
        allowNull: true
    },
    table1: {
        type: STRING,
        allowNull: true
    }, 
    sum: {
        type: STRING,
        allowNull: true
    }
});

// export default Gig;