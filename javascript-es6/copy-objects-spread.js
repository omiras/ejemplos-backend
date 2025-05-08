
// ¿Cómo hacer una copia a mano BIEN del objeto pastel?
const pastel = {
    nombre: "Zanahoria",
    kcal: 3000,
    color: "naranja"
}

console.log(pastel);


const copiaPastel = {
    nombre : pastel.nombre,
    kcal: pastel.kcal,
    color: pastel.color,
    ingredientes: ["huevo", "harina", "zanahoria"]
}

console.log(copiaPastel);

// Copiar usando el operador de spread
const copiaSpreadPastel = {
    ...pastel,
    ingredientes: ["huevo", "harina", "zanahoria"]
}

console.log(copiaSpreadPastel);

// solo copiar
const copiaSpreadSimple = {...pastel};

console.log("🚀 ~ copiaSpreadSimple:", copiaSpreadSimple);

// foram erronea de copiar un objeto

