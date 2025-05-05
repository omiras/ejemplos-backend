const array1 = [3, 10, 4];
array1.sort(compareFunc);
console.log(array1);

function compareFunc(a, b) {
    if (a > b) {
        return 1; // a debe ir detrás de b
    }

    if (a < b) {
        return -1; // a debe ir antes que a
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

    // a partir de este caso es que los rating son iguales. Vamos a mirar pues el número de reviews
    if (a.reviews > b.reviews) {
        return -1;
    }

    if (a.reviews < b.reviews) {
        return 1;
    }

    // el mismo rating y el mismo de reviews
    return 0;

});

console.log("Sort hoteles: ", accommodations);