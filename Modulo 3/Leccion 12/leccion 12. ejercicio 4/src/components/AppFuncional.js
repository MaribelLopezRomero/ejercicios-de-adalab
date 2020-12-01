import React, { useState, useEffect } from 'react';
import '../stylesheets/App.scss';

const AppFuncional = () => {
  const [inputValue, setInputValue] = useState('');
  useEffect(() => {
    let getData = localStorage.getItem('data');
    getData = JSON.parse(getData);
    setInputValue(getData.inputValue);
  }, []);

  const writeText = (ev) => {
    const userText = ev.target.value;
    console.log(userText);
    const saveData = JSON.stringify(inputValue);
    localStorage.setItem('data', saveData);
    setInputValue(userText);
  };

  return (
    <textarea
      name='textarea'
      rows='10'
      cols='50'
      value={inputValue}
      onChange={writeText}
    ></textarea>
  );
};

export default AppFuncional;
