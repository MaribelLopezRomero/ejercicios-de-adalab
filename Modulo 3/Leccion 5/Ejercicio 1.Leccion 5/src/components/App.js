import React from 'react';
import '../stylesheets/App.scss';
import OnionHater from './OnioHater';
import Destiny from './Destiny'

class App extends React.Component {
  render() {
    return (
      <>
      <OnionHater/>
      <Destiny/>
      </>
    );
  }
}

export default App;
