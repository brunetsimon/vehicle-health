import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';

class App extends Component {
  render() {
    return (
      <div id="app wrapper">
        <Navbar />
        <Main />
      </div>
    );
  }
}

export default App;
