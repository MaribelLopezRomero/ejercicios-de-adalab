import React from 'react';
import './App.scss';
import Mediacard from './Mediacard'


class MediaList extends React.Component {
  render() {
    return (
      <>
        <Mediacard name = "Alex Guerrero" date = "Lunes 26 de junio de 2017"/>
        <Mediacard name = "sonia Perez"date = "Martes 20 de junio de 2017"/>
        <Mediacard name = "Blanca Castillo"date = "Jueves 12 de junio de 2017"/>
      </>
    );
  }
}

export default MediaList;
