'use.strict';

const input = document.querySelector ('input');
const button = document.querySelector ('button');
const ul = document.querySelector ('ul');

function getStarsWar() {
    let personaje = input.value;
fetch(`https://swapi.dev/api/people/?search=${personaje}`)
.then((response) => response.json())
.then((data) => {
    // console.log (data.results)
    let characteres = data.results;
    for ( const character of characteres){
        ul.innerHTML += `<li>${character.name}</li> <li> ${character.gender}</li>`
        // console.log (character.gender)

    }

});
}

button.addEventListener ('click', getStarsWar);

