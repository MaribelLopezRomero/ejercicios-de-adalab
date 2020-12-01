import React from 'react';
import '../stylesheets/App.scss';

//Ejercicio 1

function handlerAlert (ev) {
    // para acceder al valor del textarea usaremos event.target.value
    const usersText = ev.target.value;
    // si el texto escrito por el usuario contiene la palabra "cebolla" saldrá nuestra alerta
    if(usersText.includes("cebolla")) {
    alert("ODIO LA CEBOLLA");
    }
  }

class OnionHater extends React.Component {
  render() {
    return (
      <>
      <textarea name="textarea" rows="10" cols="50" placeholder = "Escribe aqui" onChange = {handlerAlert}></textarea>
      </>
    );
  }
}

export default OnionHater;

//Ejercicio 3

// class OnionHater extends React.Component {
//     // incluimos el constructor para  asegurarnos de que el this que usará con la función handler es el this que queremos: para ello usamos el método bind, con lo que este handler irá asociado siempre a nuestro componente OnionHater
//   constructor(props) {
//     super(props);
//     this.handleAlert = this.handleAlert.bind(this);
//     // Guardaremos la información de si estamos odiando o no
//     this.isHating = false;
//   }

//   handleAlert(event) {
//     // incluimos el método forceUpdate para que cada vez que se active el evento se vuelva a ejecutar render
//     this.forceUpdate();
//     // seleccionamos el contenedor que ocupa toda la página y cuyo fondo cambiará a color rojo
//     const container = document.querySelector(".container");
//     // para acceder al valor del textarea usaremos event.target.value
//     const usersText = event.target.value;
//     // usamos el método toLowerCase para que funcionen tanto mayúsculas como minúsculas (convertimos si son mayus en minus)
//     const usersTexLowerCase = usersText.toLowerCase();
//       // si el texto escrito por el usuario contiene la palabra "cebolla" el fondo de la página se volverá rojo, y cuando se borre volverá al fondo blanco por defecto
//     if (usersTexLowerCase.includes("cebolla")) {
//       container.classList.add("container-alert");
//       this.ishating = true;
//       // alert("ODIO LA CEBOLLA");
//     } else {
//       this.ishating = false;
//       container.classList.remove("container-alert");
//     }
//   };
//     render() {
//       return (
//         <>
//         <textarea name="textarea" rows="10" cols="50" placeholder = "Escribe aqui" onChange =  ></textarea>
//         </>
//       );
//     }
//   }
  
//   export default OnionHater;