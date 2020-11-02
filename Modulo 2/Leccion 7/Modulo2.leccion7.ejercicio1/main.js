'use strict';

//ejercicio 2

for (let i = 1; i < 10; i++) {
  console.log('Voy por la vuelta ' + i);
}

//ejercicio 3

let acc = 0;

for (let i = 0; i < 10; i++) {
  acc = acc + 2;
  console.log(`El resultado es: ${acc}`);
}

//ejercicio 4

let year = 2017;

for (let i = 0; i < 15; i++) {
  year += 3;
  console.log(`La proxima luna del cazador sera el 5 de octubre de ${year}`);
}

//Ejercicio 5

const number = [5, 8, 3, 6, 7];

let acc1 = 0;
let media;

for (let i = 0; i < number.length; i++) {
  acc1 = +number[i];
  media = acc1 / number.length;
  console.log(`la media es ${media}`);
}

//Ejercicio 6

const input = document.querySelector('.js-input');
const input1 = document.querySelector('.js-input1');
const button = document.querySelector('.js-button');
const answer = document.querySelector('.js-answer');

const movies = [];

function addMovies(ev) {
  //primera funcion. Añadir las peliculas al array
  const inputvalue = input.value;
  const inputValue1 = input1.value;
  movies.push(input.value);
  movies.push(input1.value);

  //Mostrar un text en answer con un bucle

  // for (let i = 0; i < movies.length; i++) {
  //   const movie = movies[i];
  //   answer.innerHTML += ` A mi tambien me encantó ${movies}`;
  //   console.log (` A mi tambien me encantó ${movie}`)
  // }

  for (const movie of movies)
    answer.innerHTML += ` A mi tambien me encantó ${movie}`;
}

button.addEventListener('click', addMovies);

//Ejercicio 7

const participantes = [
  {
    name: 'Maria',
    age: 29,
    position: 'diseñadora',
  },
  {
    name: 'Lucia',
    age: 31,
    position: 'ingeniera quimica',
  },
  {
    name: 'Susana',
    age: 34,
    position: 'periodista',
  },
  {
    name: 'Rocio',
    age: 25,
    position: 'actriz',
  },
  {
    name: 'Inmaculada',
    age: 21,
    position: 'diseñadora',
  },
];

function countAdalabers(ev) {
  console.log(participantes.length);
}
countAdalabers();

let acc3 = 0;

function averageAge() {
  for (let i = 0; i < participantes.length; i++) {
    const elementParticipantes = participantes[i];

    acc3 = acc3 + elementParticipantes.age / participantes.length;

    console.log(`la media de edad de las adalabers es ${acc3}`);
  }
  return acc3;
}
averageAge();

function theYoungest() {}

let acc4 = 0;
function countDesigners() {
  for (let i = 0; i < participantes.length; i++) {
    const elementParticipantes = participantes[i];
    if (elementParticipantes.position === 'diseñadora') {
      acc4 = acc4 + 1;
    }
    console.log(`el numero de adalabers diseñadoras es ${acc4} `);
  }
}

countDesigners();

//Ejercicio 8

const alarm = document.querySelectorAll('.js-alarma');
const body = document.querySelector('body');

function pulsar() {
  body.classList.toggle('colorred');
}

for (let i = 0; i < alarm.length; i++) {
  const element = alarm[i];
  alarm[i].addEventListener('click', pulsar);
  
}

// ejercicio 10

const items = [
  'Ada',
  1815,
  ['Informática', 'Matemática', 'Escritora'],
  {
    mother: 'Anna Isabella',
    father: 'Lord Byron'
  }
];

for (let i = 0;  i< items.length; i++) {
  const element = items[i];
 let typeelement = typeof element
  console.log (`El dato ${element} esta en la posicion [i] y es del tipo ${typeelement}`)
  
}

