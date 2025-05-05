
soyNormal();

function soyNormal() {
    console.log("SOY NORMAL");
}

/** Guardar una referencia a una función en una variable */
const saludo = function () {
    return "Hola";
};

// cómo ejecutar la función
console.log(saludo());

// Función flecha o arrow function
const saludoFlecha = () => {
    return "Holitas";
}

// Ejecutar la función
console.log(saludoFlecha());




// si tu función solo tiene una línea, puedes omitir las llaves
// esta función tiene un 'return' implícito 
const yoTambienSaludo = () => "Soy una función de una sola línea";

console.log(yoTambienSaludo());


// Pasar parámetros a una función flecha
// Pasamos el texto a minúsculas y lo retornamos
const pasarMinusculas = (texto) => texto.toLowerCase();

console.log(pasarMinusculas("FUNCIÓN FLECHA CON PARÁMETROS"));

// Esto no va a funcionar
const pasarMinusculas_v2 = (texto) => {
    texto.toLowerCase(); // FALTA UN RETURN, ESTÁ MAL
}

console.log(pasarMinusculas_v2("YO FUNCIONO?"));

// solo un parámetro no necesita paréntesis
// Va a recibir un número, lo multiplica por dos y luego lo retorna
const multiplicaPorDos = n => n * 2;
console.log(multiplicaPorDos(100));


