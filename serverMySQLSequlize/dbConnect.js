import * as dotenv from 'dotenv'
import {Sequelize} from "sequelize";


dotenv.config()
const envFile = process.env


export const db = new Sequelize(
    envFile.SERVER_DB,
    envFile.SERVER_USER,
    envFile.SERVER_PASS,
    {
      host:  envFile.SERVER_HOST,
      dialect: 'mysql',
      define:
      {
        timestamps: false,
        freezeTableName: true
    }}
  );

db.authenticate().then(() => {
   console.log('Connection has been established successfully.');
}).catch((error) => {
   console.error('Unable to connect to the database: ', error);
});
