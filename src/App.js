import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/style/fonts.css';
import GameContainer from './containers/gameContainer'

class App extends Component {
  render() {
    return (
      <div className="container">
        <GameContainer />

      </div>
    )
  }
}

export default App;
