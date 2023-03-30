import todoSaveDone from "./todoSaveDone.js";
import {listDrop} from "./printLists.js";

let root = document.getElementById("root")

listDrop.addEventListener("change", (e) => {        // Lyssnar på change - när man ändrar ett värde (i stället för click där man klickar på något)
    console.log("ändra lista", e.target.value);
    printTodos(e.target.value)
})

export default function printTodos(list) {      //  Funktionen hämtar bara en specifik lista

    if (!list) {        // if list-Id inte har ett värde - om null returneras sätter vi list till 1.
        list = 1
    }

    fetch("http://localhost:3000/items/"+ list)     // Fetchar/hämtar resurs från servern, databasen
    .then(res => res.json())
    .then(data => {
        console.log("items", data);
   
        let ul = document.createElement("ul");      // Skapar lista

        data.map(todo => {                             // Mappar igenom todos???
            let li = document.createElement("li");
            li.innerText = todo.itemName + " (" + todo.listId + ")";  // Sparar i listan
            li.id = todo.itemId;

            li.addEventListener("click", () => {
                todoSaveDone(li.id, listDrop.value);
            })

            ul.appendChild(li);     // Appendar/fäster listan som ligger utanför mappen
        })

        root.innerHTML = "";          
        root.appendChild(ul);       // utanför själva mappen tar vi root, appendChild....
    })
}