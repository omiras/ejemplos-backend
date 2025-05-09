const http = require('http');
const fs = require('fs');
const url = require('url');

// Leemos el fichero una vez al inicio
const infractores = JSON.parse(fs.readFileSync('infractores.json', 'utf-8'));

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const matricula = parsedUrl.query.matricula;

  res.setHeader('Content-Type', 'text/html; charset=utf-8');

  if (path === '/') {
    res.end(`
      <h1>Consulta de infracciones de la DGT</h1>
      <form action="/comprobar" method="GET">
        <label>Matrícula: <input type="text" name="matricula" required></label>
        <button type="submit">Comprobar</button>
      </form>
    `);
  }

  else if (path === '/comprobar') {
    const infractor = infractores.find(i => i.matricula === matricula);

    if (infractor) {
      res.end(`
        <h1>¡Ay madre! 🚓💸</h1>
        <p>La matrícula <strong>${matricula}</strong> fue pillada el <strong>${infractor.fecha}</strong>.</p>
        <p>Multa de <strong>${infractor.cantidad}€</strong>. ¡Eso te pasa por jugar a ser Vin Diesel en plena M-30!</p>
        <a href="/">Volver</a>
      `);
    } else {
      res.end(`
        <h1>Todo correcto ✅</h1>
        <p>La matrícula <strong>${matricula}</strong> no figura como infractora.</p>
        <a href="/">Volver</a>
      `);
    }
  }

  else {
    res.statusCode = 404;
    res.end('<h1>Página no encontrada</h1>');
  }
});

server.listen(3000, () => {
  console.log('Servidor DGT escuchando en http://localhost:3000');
});
