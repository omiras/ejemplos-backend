const fs = require('fs');
let data;
// ¿Cuál es el código en el cúal yo como programador/a no tengo el control?
try {
    data = fs.readFileSync('archivo.txt', 'utf8');
} catch (err) {
    console.log("algo ha ocurrido: ", err.message);
}
console.log(data);