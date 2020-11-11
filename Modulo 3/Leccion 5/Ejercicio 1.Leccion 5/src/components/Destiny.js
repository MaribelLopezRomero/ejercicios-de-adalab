import React from 'react';

function handlerCitys (ev){
    // recogemos el value de la opción que selecciona el usuario
    const select = ev.target.value;
    //activamos una alerta indicando la opción seleccionada
    alert(`Tu destino es viajar a ${select}`)


}
class Destiny extends React.Component {
  render() {
    return (
      <>
      <form>
        <label htmlFor="cities" className="label">
          Elige tu destino:  
          <select id="cities" name="cities" className="select" onChange = {handlerCitys}>
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

export default Destiny;