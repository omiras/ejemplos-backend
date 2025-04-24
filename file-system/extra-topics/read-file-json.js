const fs = require('fs');

// lectura deñ fichero utilizando promesas y tratamiento de código asíncrono con el async/await (como cuando hacíamos el fetch)
async function readFileCountries() {

    const fileContent = await fs.promises.readFile("./paises.json", "utf-8");
    // Transformar el string en un array de objetos
    const parsedData = JSON.parse(fileContent);
    console.log(parsedData[0].city);

}

readFileCountries();

