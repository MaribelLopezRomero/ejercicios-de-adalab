'use strict';

//ejercicio 1

// function getEmoji() {
//   fetch("https://api.rand.fun/text/password?length=20")
//     .then(response => response.json())
//     .then(data => {
//       document.querySelector('.js-result').innerHTML = data.result
//     });
// }
// document.querySelector('.js-emoji').addEventListener("click", getEmoji);

//Ejercicio 2

// function getDogImage() {
//     fetch("https://dog.ceo/api/breed/chihuahua/images/random")
//       .then(response => response.json())
//       .then(data => {
//         const img = document.querySelector("img");
//         img.src = data.message;
//         img.alt = "Un perro";
//       });
//   }
//   const btn = document.querySelector(".js-dog");
//   const btn1 =document.querySelector ('.js-dog1')
//   btn.addEventListener("click", getDogImage);
//   btn1.addEventListener("click", getDogImage);


// Ejercicio 3


// function github () {
//   const user1 = p.inputvalue;
//     fetch(`https://api.github.com/users/${user1}`)
//     .then(response => response.json())
//     .then(data => {
//       // const user = data.login;
//       // const user1 = p.inputvalue;
//      const name = data.name;
//      const avatar = data.avatar_url;
//      const repositorios = data.public_repos;
//      p.innerHTML = (`${name}, <img src= "${avatar}" />, ${repositorios}`) 
//      console.log ('entra en la funcion')

//     });

// }

// const p = document.querySelector ('p')
// const input = document.querySelector ("input")
// const button = document.querySelector ("button")

// button.addEventListener ('click', github);

// ejercicio 4

// function getBreeds () {
//   fetch('https://dog.ceo/api/breeds/list')
//     .then(response => response.json())
//     .then(data => {
//       console.log('Breeds data response: ', data);

//        const ul = document.querySelector('ul');
//       const breeds = data.message;
//       console.log (breeds)
//       let ulContent = '';

//       for (const breed of breeds) {
//       const breedContent = `<li>${breed}</li>`;
//       ulContent += breedContent;
//      }
//      ul.innerHTML = ulContent;
//     });
// }
// const btn = document.querySelector('.js-btn');
// btn.addEventListener('click', getBreeds);

// function getBreedsImage () {
//   fetch('https://dog.ceo/api/breeds/list')
//     .then(breedsResponse => breedsResponse.json())
//     .then(breedsData => {
//       const breeds = breedsData.message;
//       console.log (breedsData.message)
//       return fetch('https://dog.ceo/api/breed/' + breeds[87] + '/images/random');
//     })
//     .then(imageResponse => imageResponse.json())
//     .then(imageData => {
//       const img = document.querySelector('img');
//       img.src = imageData.message;
//       console.log ( imageData.message)
//       img.alt = 'Un perro';
//     });
// }
// const btn = document.querySelector('.js-btn');
// btn.addEventListener('click', getBreedsImage);



// const input1 = document.querySelector ('.js-input1')
// const bnt1 = document.querySelector ('.js-btn1')
// const p1 = document.querySelector ('.js-p')

// function listGithub () {
//   fetch('https://api.github.com/orgs/Adalab')
//   .then(Response =>Response.json())
//   .then(adalabData => {
//     console.log (adalabData);
//   console.log (adalabData.repos_url);
//   return fetch('https://api.github.com/orgs/Adalab/repos');
//   })
// .then(urlResponse => urlResponse.json())
// .then(urlData => {
//   //console.log (urlData)
//   for (const urlItem of urlData) {
//     //console.log (urlItem.name)
//     p1.innerHTML+= (urlItem.name)
  
//   }
// });
// }
// listGithub ();

// bnt1.addEventListener ('click', listGithub);

// Ejercicio 6

// const dogs = [];

// function getRandomDog() {
//   fetch('https://dog.ceo/api/breeds/list')
//     .then((breedsResponse) => breedsResponse.json())
//     .then((breedsData) => {
//       const breeds = breedsData.message;
//       for (let i = 0; i < breeds.length; i++) {
//         dogs.push(breeds[i]);
//       }
//       return fetch(`https://api.rand.fun/number/integer?max=${dogs.length}`);
//     })
//      .then((randomResponse) => randomResponse.json())
//     .then((randomData) => {
//     const randomBreed = randomData.result;
//     console.log(randomBreed);
//     document.querySelector('.js-text').innerHTML = dogs[randomBreed];
//      return fetch(
//      `https://dog.ceo/api/breed/${dogs[randomBreed]}/images/random`
//     );
//     })
//     .then((imageResponse) => imageResponse.json())
//     .then((imageData) => {
//     const img = document.querySelector('.js-image');
//     img.src = imageData.message;
//     img.alt = 'Un perrete';
//     });
// }

// getRandomDog()

// document.querySelector('.js-button').addEventListener('click', getRandomDog);


const input = document.querySelector ('.js-input1')
const button = document.querySelector ('.js-btn1')
const p = document.querySelector ('.js-p')


function search () {
  fetch('https://api.github.com/orgs/Adalab')
  .then((response) => response.json())
  .then((data) => {
  console.log (data)
  return fetch('https://api.github.com/orgs/Adalab/repos');
})
.then(urlResponse => urlResponse.json())
.then(urlData => {
console.log (urlData)
for (const urlItem of urlData) {
console.log (urlItem.name)
 p.innerHTML += (urlItem.name)
   })
  }





 button.addEventListener ("click", search)