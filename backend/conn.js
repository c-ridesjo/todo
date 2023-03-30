const mysql = require("mysql2")

connection = mysql.createConnection({       //  Uppkoppling mot databasen skapas genom att skapa modulen
    host: "localhost",                      //  connection där vi använder mysql för att göra funktionen create connection.
    port: "3306",       // ?                //  Matar in ett objekt som innehåller alla inloggningsdata från databasen.
    user: "todo",
    password: "todo",
    database: "todo"
})

module.exports = connection;                // Exporterar ut objektet från modulen connection
                                            // Objektet kan nu importeras in i alla andra filer i projektet där connection behövs