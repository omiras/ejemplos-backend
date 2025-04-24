// Importar el módulo interno que nos permite ejecutar operaciones sobre el sistema de ficheros. Este módulo se llama fs

const fs = require('fs');

// Fs es un objeto que dispone de varios métodos para manipular los archivos. Por ejemplo, el método fs.readFileSync nos permite leer un fichero. 

// El primer parámetro es la ruta al fichero que queremos leer. El segundo parámetro es la codificación. Es importante ponerlo porque si no NodeJS nos devolverá datos binarios (un tipo de dato llamada Buffer).
// Devuelve un string
const fileContent = fs.readFileSync("chistes.txt", "utf-8");
console.log(fileContent);