// El módulo process contiene información sobre el programa que se está ejecutando en este momento. Se utiliza ampliamente para crear scripts (permite acceder a los parámetros que le pongamos)

//console.log(process.argv);

// Crea un script que recibe dos números y te devuelve la media de estos dos números redondeado en excesso

const n1 = Number(process.argv[2]); // formas de transformar un string a number
const n2 = +process.argv[3];

console.log( (n1 + n2) / 2);