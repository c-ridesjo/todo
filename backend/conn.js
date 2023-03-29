const mysql = require("mysql2")

connection = mysql.createConnection({
    host: "localhost",
   // port: "8889",
    user: "todo",
    password: "todo",
    database: "todo"
})

module.exports = connection;