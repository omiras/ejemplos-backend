// Importamos el método 'readFileSync' y lo metemos dentro de la variable readFileSync que acabamos de crear
// Lo que estáis viendo aquí es el operador de desestructuración {}. Esta metiendo el método de fs readFileSync en la variable readFileSync
import { readFileSync } from "node:fs";

// en readFileSync tenemos el método que lee de forma síncrona el fichero
const fileContent = readFileSync("./chistes.txt", "utf-8");

console.log(fileContent);