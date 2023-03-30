var express = require('express');                   
var path = require('path');
var cookieParser = require('cookie-parser');            
var logger = require('morgan');
const cors = require("cors")

const connection = require("./conn");   // Hämtar in connection-objektet från conn.js

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 
// ITEMS                              // Alla routes skrivs i den här filen
//

// Hämtar alla items och skickar dem till frontend sedan
app.get("/items", (req, res) => {

    connection.connect((err) => {       // Skapar connection till databasen
        if (err) {                      // Felhantering - om något går fel
            console.log("err", err);
        }

        // En callbackfunktion. Om uppkoppling till databasen fungerar, utan error, skapas en query 
        // och svaret på denna har vi tillgång till som data i callbacken.
        // Querys = anropen vi skickar till databasen.
        connection.query("SELECT * FROM items WHERE done = 0" , (err, data) => { // Hämta allt från items
            if (err) {                  // Felhantering 
                console.log("err", err);
            }

            console.log("data från query", data);
            res.json(data)                          // En rout kan bara skicka ETT svar - inte flera
        })
    })
})

// Hämtar en specifik lista. 
app.get("/items/:listId", (req, res) => {       // listId i items är foreign key i den listan

    let listId = req.params.listId;

    connection.connect((err) => {
        if (err) {
            console.log("err", err);
        }

        connection.query("SELECT * FROM items WHERE done = 0 AND listId = " + listId , (err, data) => {
            if (err) {
                console.log("err", err);
            }

            console.log("data från query", data);
            res.json(data)
        })
    })
})

// Skicka alla items
app.post("/items", (req, res) => {
    let newTodo = req.body;

    connection.connect((err) => {
        if (err) {
            console.log("err", err);
        }

        // Skapar en variabel med anropet här eftersom det blir så långt, så då skickas variabeln in i queryn nedan i st.
        // Skickar in värden i items. Värdena kan skrivas i javascript med plustecken som nedan. (Template literals är samma sak = bokstäver med `lö kjjö lkj`)
        let sql = "INSERT INTO items (itemName, listId) VALUES ('"+newTodo.newTodoName+"', "+newTodo.newTodoList+" )";

        connection.query(sql, (err, data) => {
            if (err) {
                console.log("err", err);
            }

            console.log("sparad", data);
            res.json(data)
        })
    })
})

// Skicka 
app.post("/done", (req, res) => {
    let itemDone = req.body.itemId;

    connection.connect((err) => {
        if (err) {
            console.log("err", err);
        }

       let sql = "UPDATE items SET done = 1 WHERE itemId = " + itemDone; // Uppdaterar items där itemId är lika med det vi har skickat i POST

        connection.query(sql, (err, data) => {
            if (err) {
                console.log("err", err);
            }

            console.log("sparad", data);
            res.json(data)
        })
    })
})

//
// LISTOR
//

// Hämtar alla listor och skickar dem till frontend sedan
app.get("/lists", (req, res) => {

    connection.connect((err) => {
        if (err) {
            console.log("err", err);
        }

        connection.query("SELECT * FROM lists" , (err, data) => {
            if (err) {
                console.log("err", err);
            }

            console.log("Listor", data);
            res.json(data)
        })
    })
})

module.exports = app;
