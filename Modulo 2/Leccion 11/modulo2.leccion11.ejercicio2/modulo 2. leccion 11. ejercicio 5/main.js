'use.strict';

const body = document.querySelector('.js-body');
const p = document.querySelectorAll('.js-p');
const inputLightDark = document.querySelectorAll('.js-radio');

function changeColor(event) {
  console.log('hola');
  const inputSelect = event.target.value;
  if (inputSelect === 'light') {
    body.classList.add('light');
    body.classList.remove('dark');
  } else if (inputSelect === 'dark') {
    body.classList.add('dark');
    body.classList.remove('light');
  }

  localStorage.setItem('inputLightDark', inputSelect);
}

for (const input of inputLightDark) {
  input.addEventListener('click', changeColor);
}

function paintBody() {
  const saveInput = localStorage.getItem('inputLightDark');
  console.log(saveInput);
  if (saveInput !== null) {
    body.classList.add(saveInput);
  }
}
paintBody();
