import React from 'react';
import logo from '../assets/logo.svg';
import './App.css';
import  '../testTs';



const Header: React.FC = () => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.tsx</code> and save to reload.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >   
      Learn React
    </a>
  </header>
);

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
