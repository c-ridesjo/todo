import printTodos from "./printTodos.js";       // Importerar funktionen printTodos (som exporteras som default)
import {printLists} from "./printLists.js";     // När flera exports finns måste man markera med {} vilken export man hämtar.
import addTodo from "./addTodo.js";             // Funktionen printLists exporterades inte som default eftersom den exporterar två olika saker.

printTodos();  //  Kalla på/anropa funktionen printTodos
printLists();




// De olika funktionerna med fetchar flyttas över till varsin egen fil under FRONTEND

// Export default används lite som ett id i ett dokument - då kan man bara ha en export i en modul.
//  Oftast har man bara en modul och en funktion. 