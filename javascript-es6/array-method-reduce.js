// El método reduce sirve para acumular valores y finalmente devolver un valor 

// Nos permite transformar el array en un resultado; normalmente se usa para acumular valores

// Movimientos bancarios
let balance = [33000, 400, 2500, -6000];

let total = balance.reduce((acumulado, siguienteValor) => {
    // console.log("Acumulado", acumulado);
    //console.log("Siguiente valor", siguienteValor);

    return acumulado + siguienteValor;
}, 0);

// Movimientos bancarios con objetos
let movimientos = [{
    fecha: "12-02-2024",
    valor: 200
}, {
    fecha: "12-02-2024",
    valor: 100
}];
// No os olvidéis que cuando usamos .reduce para un array de objetos, 'acumulado' es un valor normalmente de tipo number y sigValor es un bojeto por lo cual tendrás que acceder a la propiedad que interesa para obtener el siguiente valor a acumular
let totalReduceObjetos = movimientos.reduce((acumulado, sigValor) => acumulado + sigValor.valor, 0);

console.log(totalReduceObjetos);
