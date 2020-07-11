import React, { Component } from 'react';

import KeyBoard from './components/KeyBoard';

import 'http://localhost:3000/right-poke.svg';
import './style/layout.css';
import './style/common.css';
import './style/style.css';

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <KeyBoard />
      </div>
    );
  }
}

export default App;
