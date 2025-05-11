/**
 * Nos han pedido en el trabajo una herramienta para genrar códigos CSS  de forma aleatória. Los quieren tanto en formato hexadecimal (#AABB11), como en forma rgb(255, 233, 44) 
 */
const colorUtils = require('./colorsUtils.js');

console.log(colorUtils);

console.log(colorUtils.generateHexColor());
console.log(colorUtils.generateRandomRGB());
console.log(colorUtils.WHITE_COLOR);