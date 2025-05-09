const http = require('http');

// Datos simulados del blog con imágenes
const posts = [
  {
    id: 1,
    title: 'Hola mundo',
    content: 'Este es mi primer post',
    image: 'https://placekitten.com/400/200'
  },
  {
    id: 2,
    title: 'Aprendiendo Node.js',
    content: 'Node.js es muy útil para servidores',
    image: 'https://placekitten.com/401/200'
  },
  {
    id: 3,
    title: 'Express vendrá después',
    content: 'Pero primero entendamos lo básico',
    image: 'https://placekitten.com/402/200'
  },
];