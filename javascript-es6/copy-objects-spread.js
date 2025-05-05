
// Copia por referencia
// const copyPastel = pastel;

// copyPastel.ingredientes = ["huevo", "harina", "zanahoria"];
// console.log("pastel: ", pastel);
// console.log("copyPastel", copyPastel);

// ¿Cómo hacer una copia a mano BIEN del objeto pastel?
const pastel = {
    nombre: "Zanahoria",
    kcal: 3000,
    color: "naranja"
}

const copiaPastel = {
    nombre : pastel.nombre,
    kcal: pastel.kcal,
    color: pastel.color,
    ingredientes: ["huevo", "harina", "zanahoria"]
}

// Copiar usando el operador de spread
const copiaSpreadPastel = {
    ...pastel,
    ingredientes: ["huevo", "harina", "zanahoria"]
}
