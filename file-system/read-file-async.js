const fs = require('fs');

// El método readFile como tercer  parámetro puede recibir una función de callback. La ejecutará en cuanto haya leido todo el fichero. En el primer parámetro 'err' nos indicará si ha habido algún error en la lecutra mientras que en 'data' nos ofreceré un string todo el contenido del fichero 
fs.readFile("./chistes.txt", "utf-8", mostrarDatos);

function mostrarDatos(err, data) {
    if (err) {
        console.log("ERROR: ", err);
        return;
    }
    console.log(data);
}

console.log("Me permite seguir ejecutando el script si lo deseo.");