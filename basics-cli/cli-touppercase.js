// Este script recibe una palabra como argumento
// y la devuelve en mayúsculas.

const palabra = process.argv[2];

// Comprobamos que se ha introducido una palabra
if (!palabra) {
  console.log('Debes introducir una palabra.');
} else {
  const mayuscula = palabra.toUpperCase();
  console.log('En mayúsculas:', mayuscula);
}
