const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const citizens = JSON.parse(fs.readFileSync('./citizens.json'));

// EJS: Formulario inicial
app.get('/mossos-ejs', (req, res) => {
  res.render('index');
});

// EJS: Mostrar ficha de ciudadano
app.get('/citizen', (req, res) => {
  const dni = req.query.dni;
  const citizen = citizens.find(c => c.idCard === dni);
  if (citizen) {
    res.render('citizen', { citizen });
  } else {
    res.status(404).send('Ciudadano no encontrado');
  }
});

// API REST
app.get('/api/citizen', (req, res) => {
  const dni = req.query.dni;
  const citizen = citizens.find(c => c.idCard === dni);
  if (citizen) {
    res.json(citizen);
  } else {
    res.status(404).json({ error: "Ciudadano no encontrado" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
