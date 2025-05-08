const numbers = [-5, -3, -1, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

/**
 * Utiliza el método map para obtener otro array donde, para cada posición, obtengamos un -1 si el número que ocupaba aquella posición es negativo, y un +1 si el nuemero es positivo
 * [-1, -1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
 */

console.log("Ejercicio signo: ", numbers.map((n) => n > 0 ? 1 : -1));

console.log("Ejercicio signo sin usar un ternario: ", numbers.map(function(n) {
    if (n>0) {
        return 1;
    }
    return -1;
}));
