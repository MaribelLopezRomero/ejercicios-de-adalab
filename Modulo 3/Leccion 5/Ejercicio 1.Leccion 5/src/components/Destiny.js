import React from 'react';
import CityImage from './Cityimage';

//Ejercicio 2

// function handlerCitys (ev){
//     // recogemos el value de la opción que selecciona el usuario
//     const select = ev.target.value;
//     //activamos una alerta indicando la opción seleccionada
//     alert(`Tu destino es viajar a ${select}`)


// }
// class Destiny extends React.Component {
//   render() {
//     return (
//       <>
//       <form>
//         <label htmlFor="cities" className="label">
//           Elige tu destino:  
//           <select id="cities" name="cities" className="select" onChange = {handlerCitys}>
//             <option value="Buenos aires">Buenos Aires</option>
//             <option value="Sidney">Sidney</option>
//             <option value="Praga">Praga</option>
//             <option value="Boston">Boston</option>
//             <option value="Tokio">Tokio</option>
//           </select>
//        </label>
//       </form>
//       </>
//     );
//   }
// }

// export default Destiny;


//Ejercicio 4

class Destiny extends React.Component {
  constructor (props){
    super (props)
    // valor inicial de las props antes de que el usuario seleccione una opción
    this.citySelect = "";
    this.handlerCitys = this.handlerCitys.bind(this);
  }


  handlerCitys (ev){
    // asociamos el value de cada option a una constante, la cual luego asociamos a las props
    const select = ev.target.value;
    this.citySelect = select;
    this.forceUpdate ();
  }
render() {
  return (
    <>
    <form>
      <label htmlFor="cities" className="label">
        Elige tu destino:  
        <select id="cities" name="cities" className="select" onChange = {this.handlerCitys}>
          <option value="Buenos aires">Buenos Aires</option>
          <option value="Sidney">Sidney</option>
          <option value="Praga">Praga</option>
          <option value="Boston">Boston</option>
          <option value="Tokio">Tokio</option>
        </select>
     </label>
     <p>Tu destino es viajar a {this.citySelect}</p>
    </form>

    <CityImage city = {this.citySelect} > </CityImage>
    </>
  );
}
}

export default Destiny;