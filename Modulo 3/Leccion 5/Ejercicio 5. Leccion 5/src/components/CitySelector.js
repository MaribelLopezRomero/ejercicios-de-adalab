import React from 'react';


class citySelector extends React.Component {
    constructor (props){
      super (props)
      // valor inicial de las props antes de que el usuario seleccione una opción
      // this.citySelect = "";
      // this.handlerCitys = this.handlerCitys.bind(this);
    }
  
  // tenemos dos opciones (1), o ponemos en el onChange la funcion y la pasamos hacia arriba, definidiendo la funcion en este componente y llamando dentro de ella a otra funcion (handelclink), para que avise a la madre. O (2)le pasamos por props al onchange directamente la funcion que hemos definido en la madre y pasado por props a este componente.

    //  (1) handlerCitys (ev){
    //   // asociamos el value de cada option a una constante, la cual luego asociamos a las props
    //   const select = ev.target.value;
    //   this.citySelect = select;
    //   // this.forceUpdate ();
    //   this.props.handelclick();
    // }
  render() {
    return (
      <>
      <form>
        <label htmlFor="cities" className="label">
          Elige tu destino: 
{/*         
           (2)Aquí es donde se da el lifting: recogemos la función que llega de la madre por props (handelclick) y se la asignamos al event OnChange del select: al seleccionar una opción del select se ejecuta la función de la madre Destiny */}
          <select id="cities" name="cities" className="select" onChange = {this.props.handelClick}>
            <option value="Buenos aires">Buenos Aires</option>
            <option value="Sidney">Sidney</option>
            <option value="Praga">Praga</option>
            <option value="Boston">Boston</option>
            <option value="Tokio">Tokio</option>
          </select>
       </label>
       
      </form>
      </>
    );
  }
  }
  
  export default citySelector;

  