import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PictureBlock from './components/picture-block/picture-block.js';

class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Click Memory Game. With React!</h1>
        </header>
        <p className="App-intro">
        Click each mouse only <strong>once</strong>!
        </p>
        <p>
          Click each mouse once to win. Click one more than once and you lose.
          </p>
        <div id="picContainer">
          <PictureBlock />
        </div>
      </div>
    );
  }
}

export default App;