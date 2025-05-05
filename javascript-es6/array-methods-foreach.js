// recorrer un array
const numbers = [45, 4, 1];
// método forEach recorre un array
// 1. Le pasamos por parámetro una función (NO la ejecutamos)
numbers.forEach(showNumber)

// showNumber(45);
// showNumber(4);
// Esta función la va a ejecutar 3 veces, tantas veces como elementos hay en el array
// En el parámetro elem tenemos cada uno de los elementos del array que pasamos por parámetro a la función
function showNumber(elem) {
    console.log(elem)
}

// El método forEach recibe una función por parámetro. Entonces, es muy común ver esta función en formato flecha porque no te suele interesar el nombre de la función

let sumaTotal = 0;

numbers.forEach((elem, index) => {
    sumaTotal += elem;
    console.log(`Para el índice ${index} su valor es ${elem}`);
    console.log("Me ejecuto creedme");
});

console.log("LA suma total es: ", sumaTotal);

// for tradicional

let sumaTotalFor = 0;

for (let i = 0; i < numbers.length; i++) {
    sumaTotalFor += numbers[i];
}

console.log("Suma total for tradicional: ", sumaTotalFor);




