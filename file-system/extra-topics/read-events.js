const fs = require('fs');

// En este ejemplo mostramos una manera que tiene NodeJS para trabajar mediante eventos

// Crear un flujo de lectura
const readStream = fs.createReadStream('chistes.txt', 'utf8');

// Escuchar el evento 'data' para recibir fragmentos del archivo
readStream.on('data', (chunk) => {
  console.log('Nuevo fragmento recibido:', chunk);
});

// Escuchar el evento 'end' cuando se haya terminado de leer todo el archivo
readStream.on('end', () => {
  console.log('Lectura del archivo completa.');
});

// Escuchar el evento 'error' para manejar errores
readStream.on('error', (err) => {
  console.error('Error durante la lectura del archivo:', err);
});
