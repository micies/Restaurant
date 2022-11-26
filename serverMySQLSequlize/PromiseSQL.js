import {db} from './dbConnect.js'

export const SQL = (sql) => {
    return new Promise((resolveRead, reject) => {
        db.query(sql[0], sql[1], (error, resultRead) => {
            if (error) reject(error)
            return resolveRead(resultRead)
        })
    })
}