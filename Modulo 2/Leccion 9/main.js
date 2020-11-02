'use strict';

// function get100Numbers() {
//   const number = [];
//   for (let i = 0; i < 100; i++) {
//     number.push(i);
//     console.log(number);
//   }
//   return number;
// }
// get100Numbers();

// console.log (get100Numbers)

const number = [];

function get100Numbers() {
  for (let i = 0; i <= 100; i++) {
    const element = number[i];
    number.push(i);
  }
  return number;
}

get100Numbers();
console.log(get100Numbers());

//Ejercicio 2

function getReversed100Numbers() {
  console.log(number.reverse(get100Numbers()));
}
getReversed100Numbers();

//Ejercicio 3

const lostNumbers = [4, 8, 15, 16, 23, 42];
const parNumber = []
const multiplos3 = []

function bestLostNomber () {
for (let i = 0; i < lostNumbers.length; i++) {
  const element = lostNumbers[i];

  if (lostNumbers[i] % 2 === 0) {
    parNumber.push (lostNumbers[i]);
    //console.log (parNumber);
  }

}
}
 
bestLostNomber ();
console.log (parNumber);

//multiplo de tres
  
function multiplosNumber () {
  for (let i = 0; i < lostNumbers.length; i++) {
    const element = lostNumbers[i];
    if (lostNumbers[i]% 3 === 0) {
      multiplos3.push (lostNumbers[i])
    }
  }
}

multiplosNumber();
console.log (multiplos3)

// concatenacion

console.log (parNumber.concat (multiplos3));

//Ejercicio 4

const tasks = [
  { name: 'Recoger setas en el campo', completed: true },
  { name: 'Comprar pilas', completed: true },
  { name: 'Poner una lavadora de blancos', completed: true },
  {
    name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
    completed: false
  }
];

const main = document.querySelector ('main');
const ul = document.querySelector ('ul');

main.innerHTML = "<p> hay un total de " + tasks.length + " tareas. <p>"

ul.innerHTML = "<li" + tasks[0] + "li>"