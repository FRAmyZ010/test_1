const db = require('mysql2');
const con = db.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'week4_expenses'
})

module.exports = con;