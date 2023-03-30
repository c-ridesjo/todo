import printTodos from "./printTodos.js";       // Importerar funktionen printTodos
import {printLists} from "./printLists.js";     // När flera exports finns måste man markera med {} vilken export man hämtar
import addTodo from "./addTodo.js";

printTodos();  //  Kalla på/anropa funktionen printTodos
printLists();




// De olika funktionerna med fetchar flyttas över till varsin egen fil under FRONTEND