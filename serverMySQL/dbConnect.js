import mysql from 'mysql'
import * as dotenv from 'dotenv'


dotenv.config()



const envFile = process.env
export const db = mysql.createConnection({
    host: envFile.SERVER_HOST,
    user: envFile.SERVER_USER,
    password: envFile.SERVER_PASS,
    database: envFile.SERVER_USER,
    Port: envFile.SERVER_PORT
})

db.connect((error) => {

    if (error) {
        throw error;
    }
});