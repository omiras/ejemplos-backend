const fs = require('fs');

// Leemos el contenido del archivo de forma síncrona
const fileContent = fs.readFileSync("./paises.json", "utf-8");

// Transformamos el string en un array de objetos
const parsedData = JSON.parse(fileContent);

// Mostramos la ciudad del primer objeto
for (let country of parsedData) {
    console.log(country.city);
}