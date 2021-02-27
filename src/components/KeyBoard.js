import React, { Component } from 'react';

import FullKey from './keys/FullKey';
import HalfKey from './keys/HalfKey';

import ALLOWED_KEYS from '../constants/allowedKeys';
import { FULL_KEYS, HALF_KEYS } from '../constants/keyLists';

class KeyBoard extends Component {
  constructor() {
    super();

    this.state = {
      pressedKeys: {}
    };
  }

  componentDidMount() {
    document.getElementById('keyboard-wrapper').focus();
  }

  handleKeyDown = ({ key }) => {
    if (!ALLOWED_KEYS[key]) return;

    this.setState(state => ({
      pressedKeys: {
        ...state.pressedKeys,
        [key]: true
      }
    }));
  }

  handleKeyUp = ({ key }) => {
    if (!ALLOWED_KEYS[key]) return;

    let pressedKeys = { ...this.state.pressedKeys };
    delete pressedKeys[key];

    this.setState({
      pressedKeys: { ...pressedKeys }
    });
  }

  render() {
    const { pressedKeys } = this.state;

    return (
      <div
        id="keyboard-wrapper"
        onKeyDown={this.handleKeyDown}
        onKeyUp={this.handleKeyUp}
        tabIndex="0"
      >
        <div className="all-keys-container">
          {FULL_KEYS.map(keyItem => (
            <FullKey
              key={keyItem.id}
              {...keyItem}
              pressedKeys={pressedKeys}
              handleKeyDown={this.handleKeyDown}
              handleKeyUp={this.handleKeyUp}
            />
          ))}
          {HALF_KEYS.map(keyItem => (
            <HalfKey
              key={keyItem.id}
              {...keyItem}
              pressedKeys={pressedKeys}
              handleKeyDown={this.handleKeyDown}
              handleKeyUp={this.handleKeyUp}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default KeyBoard;
