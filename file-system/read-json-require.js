// Leemos el contenido del archivo mediante require (des de Node V18)
const countries = require("./paises.json");

// Mostramos la ciudad del segundo objeto
console.log(countries[1].city);
