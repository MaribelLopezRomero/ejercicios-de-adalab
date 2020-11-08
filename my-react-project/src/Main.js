import React from 'react';
import './App.scss';

class Main extends React.Component {
  render() {
    return (
      <main className='App-section'>
        <p className='App-paragraph'>
         {this.props.text}
        </p>
        <div className='App-moreinfo'>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Leer más...
          </a>
          <i className='App-heart fa fa-heart' aria-hidden='true'></i>
        </div>
      </main>
    );
  }
}

export default Main;
