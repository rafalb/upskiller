import React from 'react';
import logo from './logo.svg';
import './App.css';
import AreasSkillsTree from './components/AreasSkillsTree';
import testData from './testData.json';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AreasSkillsTree areas={testData["areas"]}/>
        <img src={logo} className="App-logo" alt="logo" />
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
