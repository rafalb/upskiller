import React from 'react';
import logo from './logo.svg';
import './App.css';
import Calculator from './components/Calculator';
import AreasSkillsTree from './components/AreasSkillsTree';
import testData from './testData.json';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Calculator/>
        <AreasSkillsTree areas={testData["areas"]}/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
