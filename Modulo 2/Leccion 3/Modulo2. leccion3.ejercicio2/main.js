const name = 'Maribel';
const pairName = 'Edurne';

if (name === 'Maribel') {
  console.log(`Bienvenido ${name}`);
} else {
  console.log('Lo siento, no estas registrada');
}

// Ejercicio 3

const number = 89;

if (number === 0) {
  console.log('El número es 0');
} else if (number < 0) {
  console.log('El número es negativo');
} else if (number + 2 > 13 && number + 2 <= 20) {
  console.log('El número más 2 es mayor que 13 pero menor o igual que 20');
} else if (number > 20 && number < 50) {
  console.log('El número es mayor que 20 pero menor que 50');
} else {
  console.log('el número no es 123123125');
}

//Ejercicio 4

const age = 8;

if (age <= 1) {
  console.log('Tu perro tiene 15 años');
} else if (age > 1 && age <= 2) {
  console.log(15 + 9);
} else {
  console.log((age - 2) * 5 + 15 + 9);
}

//Ejercicio 5

const div = document.querySelector('div');

if (div.classList.contains('.warning')) {
  div.innerHTML = '<h1>Aviso</h1> <p>Tenga cuidado</p>';
} else if (div.classList.contains('.error')) {
  div.innerHTML = '<h1>ERROR</h1> <p>Ha surgido un error</p>';
} else if (div.classList.contains('.success')) {
  div.innerHTML = '<h1>Correcto</h1> <p>Los datos son correctos</p>';
}

// Ejercio 7

const todayDate = 'Domingo';

switch (todayDate) {
  case 'Lunes':
    console.log('Hoy me tomo un café con Maricarmen');
    break;
  case 'Martes':
    console.log('Bajar al perro');
    break;
  case 'Miércoles':
    console.log('Vamos al cine a ver una peli');
    break;
  case 'Jueves':
    console.log('Juernesss');
    break;
  case 'Viernes':
    console.log('Cumpleaños de Paco');
    break;
  case 'Sábado':
    console.log('Comida con los suegros');
    break;
  default:
    console.log('Dormir hasta las 12');
}

//Ejercicio 7

let ingredient = 'pollo';

// if (ingredient === '') {
//   console.log('Nada en la nevera');
// } else if (ingredient === 'pollo') {
//   console.log('tu ingrediente es pollo, puedes freirte unas patatas');
// } else if (ingredient === 'merluza') {
//   console.log(
//     'tu ingrediente es merluza, puedes hacerte una marluzita en salsa verde'
//   );
// } else if (ingredient === 'espinacas') {
//   console.log(
//     'tu ingrediente es espincas, puedes hacerte unas espicancas rehogadas'
//   );
// }

switch (ingredient) {
  case 'pollo':
    console.log('tu ingrediente es pollo, puedes freirte unas patatas');
    break;
  case 'merluza':
    console.log(
      'tu ingrediente es merluza, puedes hacerte una marluzita en salsa'
    );
  case 'espinacas':
    console.log(
      'tu ingrediente es espincas, puedes hacerte unas espicancas rehogadas'
    );
  default:
    console.log('nada en la nevera');
}
