const array1 = [3, 10, 4, 4]; // 3, 4,  4, 10 
//array1.sort(compareFunc);
//console.log(array1);

function compareFunc(a, b) {

    console.log(`Voy a comparar el ${a} con el ${b}`);

    if (a > b) {
        return 1; // a debe ir detrás de b
    }

    if (a < b) {
        return -1; // a debe ir antes que b
    }

    if (a == b) {
        return 0;
    }

    // return a - b
}

let accommodations = [
    { name: 'Hotel Alexa', rating: 4.5, reviews: 200 },
    { name: 'Hotel Balam', rating: 4.7, reviews: 150 },
    { name: 'Hotel Connor', rating: 4.5, reviews: 250 },
    { name: 'Hotel Danya', rating: 4.7, reviews: 300 },
    { name: 'Hotel Epili', rating: 4.3, reviews: 100 },
    
];

// ordenar por rating, queremos los mejores hoteles primero
// Para el mismo rating queremos poner por delante aquel que tenga más reviews
accommodations.sort((a, b) => {
    if (a.rating > b.rating) {
        return -1;
    }

    if (a.rating < b.rating) {
        return 1;
    }

    // el mismo rating y el mismo de reviews
    return 0;

});

// console.log("Sort hoteles: ", accommodations);


// Un array de pasajeros. Los pasajeros con billete "priority" van los primeros al embarcar
const pasajeros = [
  { nombre: "Ana", billete: "normal" },
  { nombre: "Luis", billete: "priority" },
  { nombre: "Sofía", billete: "normal" },
  { nombre: "Carlos", billete: "priority" },
  { nombre: "Elena", billete: "normal" }
];

const orden = ["normal", "priority"]; // Caunto más alto es el índice, más prioridad tiene el pasajero

pasajeros.sort((pas1, pas2) => {

    console.log(`Indice pasajero 1: ${orden.indexOf(pas1.billete)}`);
    console.log(`Indice pasajero 2: ${orden.indexOf(pas2.billete)}`);
    console.log("------------------------------------------------------")

    // ¿De qué manera podría utilizar el valor de indexOF para conseguir ordenar cualquier rango de categorías?

});

// pasajeros.sort((pas1, pas2) => {
//     if (pas1.billete == "priority" && pas2.billete == "normal") {
//         return -1; // el pas1 va delante del pas2 
//     }

//     if (pas1.billete == "normal" && pas2.billete == "priority") {
//         return 1; // pas1 va detrás del pas2
//     }

//     return 0; // en el caso que los pasajeros tengan el mismo billete
// });

// console.log("🚀 ~ pasajeros.sort ~ pasajeros:", pasajeros)

