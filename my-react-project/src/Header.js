import React from 'react';
import logo from './logo.svg';
import './App.scss';

class Header extends React.Component {
  render() {
    return (
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <div className='App-wrapper'>
            <h1 className='App-title'>Álex Guerrero</h1>
            <h2 className='App-subtitle'>Lunes 26 de junio de 2017</h2>
          </div>
        </header>
    );
  }
}

export default Header;