// Podemos usar el operador ternario para asignar un valor a un variable en función de la evaluación de otra
let age = 16;

// puedo pasar a la discoteca si tengo 18 o más años
// En caso que tenga 18 años o más queremos un string con el valor "Puedes pasar" en caso contrario un string con el valor "Eres menor de edad"

let message = age >= 18 ? "Puedes pasar" : "Eres menor de edad";
console.log("🚀 ~ file: ternary-operator.js:8 ~ message:", message);


// Rewrite this if using the conditional operator '?':


let result;
let a = 4;
let b = 0;

result = (a + b < 4) ? 'Below': 'Over';

// if (a + b < 4) {
//     result = 'Below';
// } else {
//     result = 'Over';
// }

