import React, { Component } from 'react';
import logo from './logo.svg';
import logoElectron from './electron.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logoElectron} className="App-logo" alt="logo" />
          <p>
            <code>Boilerplate React + Electron.</code>
          </p>
          <button type="button" className="button">Get Started</button>
        </header>
      </div>
    );
  }
}

export default App;
