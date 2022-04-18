import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [ counter, changeCounter ] = useState(1);
  window.changeCounter = changeCounter;
  return (
    <div className="App">
      <h1>Welcome</h1>
      <h3>{ counter }</h3>
      <h4>{ counter }</h4>
    </div>
  );
}

export default App;
