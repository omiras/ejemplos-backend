// recorrer un array
const numbers = [45, 14, -100];
// método forEach recorre un array
// 1. Le pasamos por parámetro una función (NO la ejecutamos)
numbers.forEach(function(elem, index) {
    console.log(`El valor del elemento en el índice ${index} es ${elem}`);
});

console.log("---------------------------");


numbers.forEach((elemento)=> {
    console.log(elemento)
})


// showNumber(45);
// showNumber(4);
// Esta función la va a ejecutar 3 veces, tantas veces como elementos hay en el array
// En el parámetro elem tenemos cada uno de los elementos del array que pasamos por parámetro a la función


// // El método forEach recibe una función por parámetro. Entonces, es muy común ver esta función en formato flecha porque no te suele interesar el nombre de la función

// let sumaTotal = 0;

// numbers.forEach((elem, index) => {
//     sumaTotal += elem;
//     console.log(`Para el índice ${index} su valor es ${elem}`);
//     console.log("Me ejecuto creedme");
// });

// console.log("LA suma total es: ", sumaTotal);

// // for tradicional

// let sumaTotalFor = 0;

// for (let i = 0; i < numbers.length; i++) {
//     sumaTotalFor += numbers[i];
// }

// console.log("Suma total for tradicional: ", sumaTotalFor);





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

personas.forEach(p=> console.log(p.nombre.toUpperCase()));