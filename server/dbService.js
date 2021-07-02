const mysql = require('mysql')
const dotenv = require('dotenv')
const { response } = require('express')
dotenv.config()

let instance = null

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME
})

connection.connect((err) => {

    if (err) {
        console.log(err.message)
    }

    console.log(`DB ${connection.state}`)
})

class DbService {
    static getDbServiceInstance() {
        return instance ? instance : new DbService()
    }

    async getAllPosts() {
        try {
            const response = await new Promise((resolve, reject) => {
                const qurey = "SELECT * FROM posts;"
                connection.query(qurey, (err, results) => {
                    if (err) {
                        reject(new Error(err.message))
                    }
                    resolve(results)
                })
            })
            return response
        } catch (error) {
            console.log(error)
        }
    }

    async getPostById(id) {
        try {
            const response = await new Promise((resolve, reject) => {
                const qurey = "SELECT * FROM posts WHERE id = ?;"
                connection.query(qurey, [id], (err, results) => {
                    if (err) {
                        reject(new Error(err.message))
                    }
                    resolve(results)
                })
            })
            return response
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = DbService