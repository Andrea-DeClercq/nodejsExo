const argv = require('yargs').argv
// Soluce simple
// const largeur = argv.largeur
// const longueur = argv.longueur

// const surface = largeur*longueur

// console.log(surface);


const surface = argv.surface;
const first = surface.split(',')[0];
const second = surface.split(',')[1];

// calculate the area of the surface
const area = first * second;

console.log(`The area of the surface is ${area} square meters`);