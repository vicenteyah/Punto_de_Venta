'use strict'
const mysql = require('mysql')
const { database } = require('../connection/connection')

const pool = mysql.createPool(database)

pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Database connection was closed.')
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Database has to many connections.')
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('DATABASE CONNECTION WAS REFUSED.')
        }
        if (err.code === 'ER_ACCESS_DENIED_ERROR') {
            console.error('DATABASE ACCESS DENIED')
        }
    }
    if (connection) {
        console.log('database connection success')
        connection.release()
    }

    return
})
module.exports = pool