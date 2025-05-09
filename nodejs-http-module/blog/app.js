/** Importamos el módulo interno (o built-in) http para poder crear un servidor */
/** Normalmente todos los módulos: internos, custom(propios) o de terceros los importamos al principio del fichero  */
const http = require('http');
const url = require('url');

// Datos simulados del blog con imágenes
const posts = [
  {
    id: 1,
    title: 'Hola mundo',
    content: 'Este es mi primer post',
    image: 'https://picsum.photos/id/0/5000/3333'
  },
  {
    id: 2,
    title: 'Aprendiendo Node.js',
    content: 'Node.js es muy útil para servidores',
    image: 'https://picsum.photos/id/1/5000/3333'
  },
  {
    id: 3,
    title: 'Express vendrá después',
    content: 'Pero primero entendamos lo básico',
    image: 'https://picsum.photos/id/2/5000/3333'
  },
];

/** invocar el método .crateServer del objeto http para crear un servidor. Esta función toma por parámetro una función de callback que se va a ejecutar cada vez que el servidor reciba una petición  */

// req: es un objeto que contiene información  y métodos sobre la petición que se acaba de producir
// res: es un objeto que contiene métodos para realizar una respuesta al cliente
const server = http.createServer((req, res) => {

  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;

  res.setHeader('Content-Type', 'text/html; charset=utf-8');


  if (path == "/posts") {
    // mostrar todos los posts
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    posts.forEach(post => {
      res.write(`
        <article>
          <h2><a href="/post?id=${post.id}">${post.title}</a></h2>
          <img src="${post.image}" alt="Imagen de ${post.title}" style="max-width: 300px;">
        </article>
      `);
    });
    res.end();

  } else if (path == "/post") {
    const query = parsedUrl.query;
    const id = query.id;

    const post = posts.find(p => p.id == id);

    if (post) {
      res.write(`<h1>${post.title}</h1>`);
      res.write(`<img src="${post.image}" alt="Imagen de ${post.title}" style="max-width: 400px;">`);
      res.write(`<p>${post.content}</p>`);
    } else {
      res.statusCode = 404;
      res.write('<h1>Post no encontrado</h1>');
    }
    res.end();
  }

  else if (path == "/") {

    // Si el usuario hace una petición a "/posts", quiero obtener todos los posts
    res.write('<h1>Mi Blog</h1>');
    res.write('<p>Bievenido a mi blog. Me llamo Óscar </p>');
    res.end();
  } else {
    // estas intentando acceder a un recurso que no existe
    res.statusCode = 404;
    res.write('<h1>Página no encontrada</h1>');
    res.end();
  }



});

server.listen(3000, () => {
  // Función de callback que se ejecuta cuando nuestro servidor empieza a escuchar peticiones de forma efectiva
  console.log("Escuchando peticiones por el puerto 3000");
});