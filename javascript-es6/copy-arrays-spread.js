// Bestiario de Axlin de Laura Gallego
const names = ["Axlin", "Dex", "Xein"];

// El operador de asignación copia los arrays por referencia. 
// Una referencia a memoria. Estamos usando la misma dirección de memoria para guardar el contenido de 'copyNames' y de 'names'
// Esto pasa porque los arrays Y los objetos son un tipo de dato NO primitivo. 
// const copyNames = names;

// copyNames.push("Morris");

// La forma correcta de copiar un array 
// usar el map 
const goodCopy = names.map(x => x);
goodCopy.push("Morris");
console.log("🚀 ~ file: copy-arrays-spread.js:14 ~ goodCopy:", goodCopy)

// Utilizar el método slice
const copySlice = names.slice();
copySlice.push("Mamut");
console.log("🚀 ~ file: copy-arrays-spread.js:20 ~ copySlice:", copySlice);

// Operador de spread para copiar un array
// Los 3 puntos es un operador y se llama 'spread'
const spreadArray = [...names];

spreadArray.pop(); // elimino un elemento
console.log("🚀 ~ file: copy-arrays-spread.js:25 ~ spreadArray:", spreadArray);

// Puedo declarar estos array con la palabra reservada const porque nunca modifico su posición en memoria siempre mantiene la que le asignó el ordenador al crearse
//  ERROR: spreadArray = ["otra cosa"];

// Con el operador de spread también podemos crear array nuevos que contengan una copia de otro y añadir nuevos elementos
const copyNamesSpreadPartial = ["Eva", ...names, "Zulema"];
console.log("construir un array usando el spread: ", copyNamesSpreadPartial);

// Unir dos arrays usando spread
const doubleArray = [...names, ...spreadArray];

// Un caso intersante del operador de spread es usarlo en métodos que aceptan un número arbitrario de argumentos
const max = Math.max(1, 4, -5, 100, 55);
console.log("max: ", max);

// De todos mis movimientos bancarios dime cual ha sido mi retirada de dinero mayor
const movements = [100, 200, -400, 200, -1000, 100];
const min = Math.min(...movements);
console.log("min: ", min);
console.log(...movements);








console.log("🚀 ~ file: copy-arrays-spread.js:14 ~ names: queda intacto", names)
