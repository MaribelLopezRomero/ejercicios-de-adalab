'use strict';

const parragraph = document.querySelector('p');
parragraph.innerHTML = 'hola mundo';

//ejercio 4

const title = document.querySelector('h1');
const name = document.querySelector('.name1');
const name2 = document.querySelector('.name2');

title.innerHTML = title.innerHTML + name.innerHTML;

//ejercicio 5

const password = document.querySelector('.password');
password.innerHTML = '******';

const password1 = document.querySelector('.paragraph');
password1.innerHTML = 'Mi contraseña es: *****';

//ejercicio 6

const div = document.querySelector('div');
const content =
  '<h1> Lorem ipsum </h1> <img src="http://via.placeholder.com/350x150" /img> <p> lorem ipsum dolor </p>';
div.innerHTML = content;

//ejercicio 7

const ul = document.querySelector('.list');
const contenido = '<li>texto1</li><li>texto2</li><li>texto3</li>';

ul.innerHTML = contenido;

// Ejercicio 8

const boton2 = document.querySelector('.button2');
boton2.classList.add('.opacity', '.hidden');
