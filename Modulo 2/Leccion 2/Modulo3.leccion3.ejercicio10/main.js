'use strict';
const horasAño = 24 * 365;
// const edad = 27;

// console.log(edad * horasAño);
// document.write(edad * horasAño);

const edad = document.querySelector('p');
const añosVividos = horasAño * parseInt(edad.innerHTML);

console.log(`he vividio ${añosVividos}`);

console.log(`he vivido ${parseInt(edad.innerHTML)} * ${horasAño}`);
