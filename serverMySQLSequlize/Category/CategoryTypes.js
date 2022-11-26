
import { INTEGER, STRING, DATE, DECIMAL } from 'sequelize';
import { db } from '../dbConnect.js';
import { Menu } from '../Menu/MenuTypes.js';



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
// Category.associate = ()=> {
//     Menu.belongsTo(Category, {foreignKey: 'id_category'});

// }

