let inputForm = document.getElementById("inputForm");

export let listDrop = document.createElement("select");             // Lite krångligare lösning på denna sida
listDrop.id = "listIdSelect";

export function printLists() {
    fetch("http://localhost:3000/lists")    
    .then(res => res.json())
    .then(data => {
        console.log("listor", data);

        data.map(lista => {     // 

            let dropItem = document.createElement("option")
            dropItem.value = lista.listId;
            dropItem.innerText = lista.listName;

            listDrop.appendChild(dropItem);

        })
        inputForm.prepend(listDrop);        // Append lägger till i slutet av listan och prepend innan listan
    })
}