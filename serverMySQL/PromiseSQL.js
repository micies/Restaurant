import {db} from './index.js'

export const SQL = (sql) => {
    return new Promise((resolveRead, reject) => {
        db.query(sql, (error, resultRead) => {
            if (error) reject(error)
            return resolveRead(resultRead)
        })
    })
}