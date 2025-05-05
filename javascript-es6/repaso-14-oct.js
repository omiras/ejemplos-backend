// podemos declarar de tres  formas variables en JS (pero una casi no se usa ya, aunque podéis ver mucho código antiguo con ella)

// Variable que quiero modificar
let sumaAcumulada = 0; // let permite declarar variables las cuáles se pueden soobrescribir

// movimientos bancarios, quiero calcular el saldo
const movimientos = [100, -50, 250]; // const permite declarar variables las cuáles NO se pueden sobreescribir. Idealmente, siempre lo declaramos con const

// recorrer un array. Tenéis que saber las diferentes formas de recorrer un array. Si hay que recorrerlo de principio a fin entonces mejor usar un for..of o un forEach para no tener que preocuparnos por los índices
for (mov of movimientos) {
    sumaAcumulada += mov;

}
console.log("🚀 ~ file: variable-declaration.js:12 ~ sumaAcumulada:", sumaAcumulada);

// Operar con arrays es tan habitual y el tipo operaciones siempre se parecen (sumar valores, buscar algo en un array, transformar un array)
// Se crearon los métodos de array para hacer más fácil este trabajo
// uno de ellos, nos permite acumular valores y devolver un resultado

// Por ejemplo el reduce para sumar valores
const sumaTotalReduce = movimientos.reduce((acumulado, valorActual) => acumulado + valorActual, 0)
console.log("🚀 ~ file: repaso-14-oct.js:22 ~ sumaTotalReduce:", sumaTotalReduce);

// el reduce sirve para hacer cualquier tipo de acumulación. La cosa es que al final te devuelve un valor. 
// Multiplica todos los elementos del array
const multiplicaPuntosJuego = [1, 2, 3];

const multTotalReduce = multiplicaPuntosJuego.reduce(function (acumulado, valorActual) {
    return acumulado * valorActual;
}, 1)
console.log("🚀 ~ file: repaso-14-oct.js:32 ~ multTotalReduce ~ multTotalReduce:", multTotalReduce);

// un ejemplo con find de objetos. Lo haremos con
// 1. Función flecha
// 2. Función con nombre
// 3. Errores habituales que se cometen
const personas = [
    {
        nombre: "Juan",
        edad: 25,
        ciudad: "Madrid"
    },
    {
        nombre: "María",
        edad: 30,
        ciudad: "Barcelona"
    },
    {
        nombre: "Pedro",
        edad: 28,
        ciudad: "Valencia"
    },
    {
        nombre: "Ana",
        edad: 22,
        ciudad: "Sevilla"
    }
];

const esPersonaDeExactamente30Años = (p) => p.edad == 30;

console.log("Utiliza tal cual la función anterior: ", esPersonaDeExactamente30Años({
    nombre: "Reina Ignlaterra",
    edad: 97,
    ciudad: "Londres"
}))

// Búscame una persona que tenga 30 años
const persona30AñosEncontrada = personas.find(esPersonaDeExactamente30Años);
console.log("🚀 ~ file: repaso-14-oct.js:62 ~ persona30Años:", persona30AñosEncontrada)







