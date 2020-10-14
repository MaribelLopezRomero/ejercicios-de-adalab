'use strict';

//Ejercicio 1

function multiplicacion(a, b) {
  const operacion = a * b;
  console.log(operacion);
  //   return operacion;
}

multiplicacion(20, 30);
// const x = multiplicacion(5, 4);
// console.log(x);

function multiplicacion(a, b) {
  const operacion = a * b;
  return operacion;
}

const x = multiplicacion(20, 30);
console.log(x);

//Ejercicio 2

function media(a, b, c, d) {
  const media1 = (a + b + c + d) / 4;
  console.log(media1);
}

media(2, 4, 6, 8);

function media(a, b, c, d) {
  const media1 = (a + b + c + d) / 4;
  return media1;
}
const y = media(5, 4, 6, 8);
console.log(y);

//Ejercicio 3

function price(a) {
  const iva = 0.21;
  const price = a;
  const total = a * 0.21;
  console.log(`Precio sin iva: ${a}, iva ${iva}, y total ${total}`);
}

price(20);

//ejercicio 4

// function number(a) {
//   const par = true;
//   const impar = false;

//   console.log(`el numero ${a}`);
// }
// par = (0, 2, 4, 6, 8, 10);
// impar = (1, 3, 5, 7, 9);

// number(18);

// Ejercicio 5

function getEl(selector) {
  const getElement = document.querySelector('selector');
  console.log(getElement);
}
getEl('.btn');

function getEl(selector) {
  const getElement = document.querySelector('selector');
  return getElement;
}
const title = getEl('.title');
console.log(title);

// title.innerHTML = 'La desesperacion';

//Ejercicio 6 ?¿?¿?¿?¿?

// if (getElement === '') {
//   console.error('No existe ningun elemento con clase, ide o tag llamado ');
// }
