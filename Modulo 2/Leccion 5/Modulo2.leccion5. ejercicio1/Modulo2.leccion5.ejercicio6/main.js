"use strict";
//Ejercicio 6

const input = document.querySelector("input");

function write(event) {
  //misma orden de console.log
  console.log(event.currentTarget.value);
  console.log(input.value);
}

input.addEventListener("keydown", write);

//Ejercicio 7

// const button = document.querySelector ('button');

// function changeclass (ev) {

//     button.classList.toggle ("button");
//     console.log ("esta entrando en la funcion")
// }

// button.addEventListener ("click", changeclass)

// ejercicio 8

const button = document.querySelector("button");
const button2 = document.querySelector(".button2");

function changeclass(ev) {
  const selectbuttons = event.currentTarget;
  selectbuttons.classList.toggle("button");
}

button.addEventListener("click", changeclass);
button2.addEventListener("click", changeclass);

//Ejercicio 9

//declarar constantes para la primera funcion
const sectionAboutElement1 = document.querySelector(".js-list1");
const sectionAboutElement2 = document.querySelector(".js-list2");
const sectionAboutElement3 = document.querySelector(".js-list3");

function handlerlist(ev) {
  const allSectionElement = event.currentTarget;
  event.currentTarget.classList.toggle("teacher--selected");

  //segunda funcion. Declaro una sola constante para los tres div con clase favorite.
  const div = allSectionElement.querySelector(".favorite");

  if (div.innerHTML === "Añadir") {
    div.innerHTML = "Quitar";
  } else if (div.innerHTML === "Quitar") {
    div.innerHTML = "Añadir";
  }
}

sectionAboutElement1.addEventListener("click", handlerlist);
sectionAboutElement2.addEventListener("click", handlerlist);
sectionAboutElement3.addEventListener("click", handlerlist);

//Ejercicio 10

const inception = "Inception";
const theButterFlyEffect = "The butterfly effect";
const eternalSunshineOfTheSM = "Eternal sunshine of the spotless mind";
const blueVelvet = "Blue velvet";
const split = "Split";

const boton = document.querySelector(".js-button");
const p = document.querySelector("p");

function listFilm(ev) {
  const films = `<li>${inception}</li><li>${theButterFlyEffect}</li><li>${eternalSunshineOfTheSM}</li><li>${blueVelvet}</li><li>${split}</li>`;
  p.innerHTML = films;
}

boton.addEventListener("click", listFilm);

function itemFilm(ev) {
  const selectedfilms = event.target.innerHTML;
  console.log(selectedfilms);
}

p.addEventListener("click", itemFilm);

//Ejercicio 11

//declarar constantes para la primera funcion
// const list = document.querySelector ('teacher')

// function handlerlist (ev){

//     const elemntlist = event.target
//  event.target.classList.toggle ('teacher--selected');

// }

// list.addEventListener ('click', handlerlist )
