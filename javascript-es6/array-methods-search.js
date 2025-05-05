const notasExamenFinal = [1, 10, 7, 8, 5, 5, 5];

// ¿Alguien ha suspendido? Sí / No
// 1. Le pasamos una función de callback
const haSuspendidoAlguien = notasExamenFinal.some(haSuspendido);

function haSuspendido(elem) {
    console.log(`Es el ${elem} menor de 5?`);
    return elem < 5;
}

console.log("¿Ha suspendido alguien?", haSuspendidoAlguien);

// array de nombres
const names = ["Zulema", "Andrii", "Esteban", "Connor", "Eva", "Ricardo"];

// Dime si en este array hay algún nombre que tenga 7 o más carácteres
const nombreLargo = names.some(esNombreLargo);

function esNombreLargo(elem) {
    return elem.length >= 7;
}

console.log("Hay un nombre con más de 7 carácteres? ", nombreLargo);

// Vale, pero quién es el primer elemento que tiene 7 o más carácteres
const nombreLargoFind = names.find(esNombreLargo);
console.log("El primer nombre largo encontrado es: ", nombreLargoFind);

// Si lo que te interesa es el índice del arrau
console.log("Índice del array con el nombre más largo: ", names.findIndex(esNombreLargo));

// Movimientos bancarios
const movimientos = [200, -100, 1240, -600, 0];

// ¿Ha retirado alguna vez más de 500 euros? Envia un mensaje al móvil del clinte
const movimientoGrande = movimientos.find(m => m < -500);
console.log("Hay movimiento grande: ", movimientoGrande);

/**
 * Y cuando es un array de objetos?
 */

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


/**
 * Buscame la persona que vive en sevilla (find), quiero todo el objeto
 */

const personaSevilla = personas.find(p => p.ciudad == "Sevilla");

if (personaSevilla) {
    console.log("La persona que vive en Sevilla es : ", personaSevilla.nombre);
}

const personaCentenaria = personas.find(p => p.edad > 100);

if (personaCentenaria) {
    console.log("La persona que tiene más de 100 años es: ", personaCentenaria.nombre);
}


/**
 * Dame todas las personas que tengan más de 25 años
 */
const personasMayores25 = personas.filter(p => p.edad > 25);
console.log("Personas mayores de 25: ", personasMayores25);
