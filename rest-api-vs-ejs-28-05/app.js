const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const citizens = JSON.parse(fs.readFileSync('./citizens.json'));

// versión EJS (Multi page application)
app.get('/mossos-ejs', (req, res)=> {
    res.render('index.ejs');
});

// EJS: mostrar ficha de ciudadano
app.get('/citizen', (req, res)=> {
   const dni = req.query.dni;
   const citizen = citizens.find(c => c.idCard === dni);

  if (citizen) {
    res.render('citizen.ejs', { citizen });
  } else {
    res.status(404).send('Ciudadano no encontrado');
  }
    res.render('citizen.ejs');
});

// API: obtener datos del ciudadano
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

app.listen(3000, () => {
  console.log(`Servidor escuchando en http://localhost:${3000}`);
});
