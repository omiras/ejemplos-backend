const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Oye, si te hacen una petición GET, mira si tienes alguno de los recursos que te piden en el directorio 'public'
app.use(express.static('public'))


// Ruta para servir el formulario HTML
app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'views', 'index.html');
  res.sendFile(filePath);
});

app.get('/about', (req, res)=> {
 const filePath = path.join(__dirname, 'views', 'about.html');
  res.sendFile(filePath);
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
