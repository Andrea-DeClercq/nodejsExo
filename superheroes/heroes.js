const superheroes = require('superheroes');
const supervillains = require('supervillains');


let heroes = superheroes.random();
let villains = supervillains.random();

console.log('Super heroes  : ' + heroes);
console.log('Super villains : ' + villains);