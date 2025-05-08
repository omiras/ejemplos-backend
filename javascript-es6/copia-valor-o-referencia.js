let nombre = "Eva"; // string, number o los bool , se copian valor 

let copiaNombre = nombre;

copiaNombre = "Pepe";

console.log("🚀 ~ copiaNombre:", copiaNombre);
console.log("🚀 ~ nombre:", nombre);

// Bestiario de Axlin de Laura Gallego
const names = ["Axlin", "Dex", "Xein"];

// El operador de asignación copia los arrays por referencia. 
// Una referencia a memoria. Estamos usando la misma dirección de memoria para guardar el contenido de 'copyNames' y de 'names'
// Esto pasa porque los arrays Y los objetos son un tipo de dato NO primitivo. 
const copyNames = names;
copyNames.push("Morris");

console.log(names);
console.log(copyNames);



