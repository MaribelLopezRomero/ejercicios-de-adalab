"use strict;";

//Ejercicio 1

const button = document.querySelector("button");
const p = document.querySelector("p");

function change(ev) {
  p.innerHTML = "Mi primer click, ¡ole yo y la mujer que me parió!";
}

button.addEventListener("click", change);
// ejercicio 2

const button1 = document.querySelector(".button");
const input = document.querySelector(".input");

function hi(ev) {
  const name = input.value;
  return console.log(`Hola, ${name}`);
}
button1.addEventListener("click", hi);

//ejercicio 3

const paragraph = document.querySelector(".paragraph");

function addparagraph(ev) {
  paragraph.innerHTML +=
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, dicta? Ex impedit temporead natus eumperspiciatis est fugit adipisci quam a, animi nobis velit in perferendis sapiente deleniti voluptatem.";
}

paragraph.addEventListener("mouseover", addparagraph);

//con return

// const paragraph = document.querySelector('.paragraph');

// function addparagraph(ev) {
//   const content = (paragraph.innerHTML +=
//     'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, dicta? Ex impedit temporead natus eumperspiciatis est fugit adipisci quam a, animi nobis velit in perferendis sapiente deleniti voluptatem.');
//   return content;
// }

// paragraph.addEventListener('mouseover', addparagraph);

//Ejercicio 4

const div = document.querySelector(".div");

function multicolor() {
  if (window.scrollY < 250) {
    div.classList.remove("div2");
    div.classList.add("div1");
  } else {
    div.classList.add("div2");
    div.classList.remove("div1");
  }
  console.log("esta entrando en la funcion");
}

window.addEventListener("scroll", multicolor);

//  Ejercicio 5

const body = document.querySelector(".body");

function changeColor(event) {
  if (event.key === "r") {
    body.classList.add("documentr");
    body.classList.remove("documentm");
  } else if (event.key === "m") {
    body.classList.add("documentm");
    body.classList.remove("documentr");
  }
  console.log("esta entrando en la funcion");
}

body.addEventListener("keydown", changeColor);

// Ejercicio 6

const buttonElement = document.querySelector(".button");

function handleButtonClick(event) {
  console.log(event.currentTarget);
}

buttonElement.addEventListener("click", handleButtonClick);
