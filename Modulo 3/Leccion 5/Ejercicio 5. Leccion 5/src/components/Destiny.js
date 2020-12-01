import React from 'react';
import CityImage from './Cityimage';
import CitySelector from './CitySelector'

class Destiny extends React.Component {
  constructor (props){
    super (props);
    this.city = '';
    this.handelClick=this.handelClick.bind(this);
  }
  handelClick (event) {

    this.city = event.target.value
    this.forceUpdate ();
  }

  render() {
    return (
        <>
      <CitySelector handelClick ={this.handelClick} />
      <p>Tu destino es viajar a </p>
      <CityImage city = {this.city} ></CityImage>
     </>
    );
  }
  }
  
  export default Destiny;