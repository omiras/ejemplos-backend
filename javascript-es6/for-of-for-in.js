const array1 = ['pepe', 'pepa', 'pepo'];

for (const element of array1) {
    console.log(element);
}

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"

// los string también pueden ser recorridor por un for...of puesto que es también un tipo de dato iterable 
const iterable = "boo";

for (const value of iterable) {
    console.log(value);
}

// for .. in
for (const index in array1) {
    console.log("for..in array: ", index);
    console.log("valor del elemento: ", array1[index]);
    console.log("Es índice par?: ", index % 2 == 0)
}

// for..in objeto
const cientifico = {
    nombre: "Newton",
    campo: "Física",
    muertoEn: 1727
}
for (const propiedad in cientifico) {
    console.log("for..in en object: ", propiedad);
    console.log("for...in acceder al valor de la propiedad", cientifico[propiedad])
}

// obtener todos los valores de un objecto
const object1 = {
    a: 'somestring',
    b: 42,
    c: false,
};

console.log(Object.values(object1));
// Expected output: Array ["somestring", 42, false]
