// Importamos el módulo 'fs' para trabajar con archivos
const fs = require('fs');

// Texto que queremos escribir en el archivo
const texto = "esto es una prueba de escritura";

// Usamos writeFileSync para escribir en el archivo de forma síncrona
// El primer parámetro es el nombre del archivo, y el segundo es el contenido
fs.writeFileSync("prueba.txt", texto, "utf-8");

console.log("Archivo escrito correctamente.");
