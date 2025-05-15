const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Nos permite procesar peticiones POST que vengan de un formulario
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// Oye, si te hacen una petición GET, mira si tienes alguno de los recursos que te piden en el directorio 'public'
app.use(express.static('public'))


// Ruta para servir el formulario HTML
app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'views', 'index.html');
  res.sendFile(filePath);
});

app.get('/search', (req, res)=>{
  console.log("Petición recibida");
  res.send(req.query);
});

app.post('/register-student', (req, res)=>{
  console.log("Petición recibida");
  console.log("Body del formulario: ", req.body);
  // Actualizar la base de datos con el nuevo estudiante TODO
  res.send("Hemos recibido tu solicitud");
});

/** Ejemplo ruta dinámica */
/** Vamos a crear una ruta, que dado el dni de un estudiante, nos de información sobre el registro de dicho estudiante
 * 
 * /student/:dnistudent
 */
app.get('/student/:dnistudent', (req, res)=>{
  console.log("Petición recibido");
  // TODO: Emular que vamos a la base de datos y traemos info sobre el estudiante identificado con dnistudent
  res.send(`Voy a traer información sobre el estudiante con dni ${req.params.dnistudent}`);
});


app.get('/about', (req, res)=> {
 const filePath = path.join(__dirname, 'views', 'about.html');
  res.sendFile(filePath);
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
