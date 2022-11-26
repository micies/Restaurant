import mysql from 'mysql'
import * as dotenv from 'dotenv'


dotenv.config()



const envFile = process.env
console.log(envFile.SERVER_HOST, envFile.SERVER_USER, envFile.SERVER_PASS, envFile.SERVER_PORT)
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