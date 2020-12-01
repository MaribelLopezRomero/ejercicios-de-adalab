import React from 'react';
import '../stylesheets/App.scss';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
    this.writeText = this.writeText.bind(this);
  }
  componentDidMount() {
    let getData = localStorage.getItem('data');
    getData = JSON.parse(getData);
    this.setState({
      inputValue: getData.inputValue,
    });
    console.log(getData);
  }
  componentDidUpdate() {
    const saveData = JSON.stringify(this.state);
    localStorage.setItem('data', saveData);
  }

  writeText(ev) {
    const userText = ev.target.value;
    console.log(userText);
    this.setState({
      inputValue: userText,
    });
  }
  render() {
    return (
      <textarea
        name='textarea'
        rows='10'
        cols='50'
        value={this.state.inputValue}
        onChange={this.writeText}
      ></textarea>
    );
  }
}

export default App;
