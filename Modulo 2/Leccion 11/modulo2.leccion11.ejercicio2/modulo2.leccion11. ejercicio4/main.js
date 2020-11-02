'use.strict';

// ejercicio 4

const input = document.querySelector('.js-input');
const p = document.querySelector('.js-parragraph');

function writeName(ev) {
  const parrafo = (p.innerHTML = input.value);
  console.log('hola');
  localStorage.setItem('name', parrafo);
}

input.addEventListener('keyup', writeName);

const getName = localStorage.getItem('name');
console.log(getName);

p.innerHTML = getName;
input.value = getName;
