const express = require('express');

const app = express();
const PORT = 3000;

const blogTitle = "JavaScript es la risa";

// Nos permite procesar peticiones POST que vengan de un formulario
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// variable global que contiene mis posts
const posts = [
    { title: "Welcome to My Blog", content: "This is the first post on my awesome blog!" },
    { title: "Learning JavaScript", content: "JavaScript is a versatile language for web development." },
    { title: "Express Basics", content: "Express makes it easy to build web applications with Node.js." },
    
]

// Oye, si te hacen una petición GET, mira si tienes alguno de los recursos que te piden en el directorio 'public'
app.use(express.static('public'))


// Ruta para servir el formulario HTML
app.get('/', (req, res) => {
    // usamos el método res.render --> renderizar
    res.render('index.ejs', {
        title: blogTitle,
        posts: posts    
    }); // sabe que tiene que ir a la carpeta "views" porque es la carpeta por defecto de las vistas (se puede cambiar).  
});



// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
