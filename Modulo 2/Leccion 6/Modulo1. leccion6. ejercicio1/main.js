'use strict';

const adalaber1 = {
    name: 'Susana',
    age: 34,
    position: 'periodista',
    
};

console.log(`Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} y soy ${adalaber1.position}`);

const adalaber2 = {} ;
adalaber2.name  = 'Rocio';
adalaber2.age = 25;
adalaber2.position = 'actriz';

console.log(`Mi nombre es ${adalaber2.name}, tengo ${adalaber2.age} y soy ${adalaber2.position}`);

//ejercicio 2. Añadir un metodo al objeto con una funcion arrow

adalaber1.run = action => console.log("estoy corriendo");

adalaber1.run();

adalaber1.runAMarathon = (distance) => console.log (`Estoy corriendo un maraton de ${distance} km `);

adalaber1.runAMarathon(50) ;

//ejercicio 3. 

const adalaber3 = {
    name: 'Susana',
    age: 34,
    position: 'periodista',
    showBio: function(){
        console.log(`Mi nombre es ${this.name}, tengo ${this.age} años y soy ${this.position}.`);
    } 
}
adalaber3.showBio();

//Ejercicio 4
 const button = document.querySelector ('button')

 function logear (event){
     console.log (event)
 }
 button.addEventListener ('click', logear)

// Ejercicio 5

const p = document.querySelector ('p');

console.dir (p);

console.log (p);

//Ejercicio 6

const cesta = {
    maxpear: 20,
    minpear: 1,
    actualpear: 5,
    initialpear: 10,
    addPear: function (){
        cesta.actualpear = cesta.actualpear + 1;
        console.log (cesta.actualpear);
    },

    removePear: () => {
        (cesta.actualpear = cesta.actualpear - 1);
        console.log (cesta.actualpear);
    },

    resetPear: () => {
        (cesta.actualpear = cesta.initialpear);
    },
    
}

cesta.resetPear = function () {
    cesta.actualpear = pearBasket.initialpear;
    console.log(cesta.actualpear);
  };

console.log (cesta.addPear)