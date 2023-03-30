import printTodos from "./printTodos.js";
import { listDrop } from "./printLists.js";

let saveTodoName = document.getElementById("saveTodoName");
let saveTodoBtn = document.getElementById("saveTodoBtn");

export default saveTodoBtn.addEventListener("click", () => {  // Exporterar eventlistener 
    console.log("click: ", saveTodoName.value, listDrop.value);  // Lyssnar efter ett klick

    fetch("http://localhost:3000/items", {      // Fetchar/skickar resurs till servern, databasen
        method: "POST",            // Skickar med ett objekt med method, headers och body eftersom det är ett POST-anrop
        headers: {
            "Content-Type": "application/json",
        },                                                      // Stringify = konverterar ett värde till JSON-notationen som värdet representerar.
        body: JSON.stringify({newTodoName: saveTodoName.value, newTodoList: listDrop.value}) // Stringify när man skickar (POST) någonting, parse när man ska läsa/hämta (GET) någonting 
    })
    .then(res => res.json())
    .then(data => {
        console.log("skapa item", data);
        printTodos(listDrop.value);
    })
})