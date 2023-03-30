import printTodos from "./printTodos.js";

export default function todoSaveDone(id, list) {    // Exporterar modulen (döp modulen till samma som funktionen - tips!    )

    console.log("Spara item som klar", id);
    
    fetch("http://localhost:3000/done/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({itemId: id})
    })
    .then(res => res.json())
    .then(data => {
        console.log("sparad som klar", data);
        printTodos(list);
    })
}