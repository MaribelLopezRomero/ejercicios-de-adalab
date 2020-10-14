'use strict';

const firstDogImage =
  'https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg';
const firstDogName = 'Dina';

const secondDogImage =
  'https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg';
const secondDogName = 'Luna';

const thirdDogImage =
  'https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg';
const thirdDogName = 'Lana';

const lista = document.querySelector('.list');
const content = `<li> <h2>
${secondDogName} </h2> <img src="${firstDogImage}" /li><li> <h2>${secondDogName} </h3> <img src="${secondDogImage}"></li><li> <h2>${thirdDogName}</h2> <img src="${thirdDogImage}"></li>>
</li>`;

lista.innerHTML = content;
