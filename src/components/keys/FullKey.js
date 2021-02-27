import React from 'react';

import KeyBase from './KeyBase';

const horseSrc = 'http://localhost:3000/piano/sounds/horse.mp3';

class FullKey extends KeyBase {
  constructor(props) {
    super(horseSrc, props);
  }

  render() {
    const {
      id,
      label,
      color,
      pressedKeys,
      repKey,
      handleKeyDown,
      handleKeyUp
    } = this.props;

    return (
      <div
        className={`key-full${pressedKeys[repKey] ? ' pressed' : ''}`}
        id={id}
        onMouseDown={() => handleKeyDown({ key: repKey })}
        onMouseUp={() => handleKeyUp({ key: repKey })}
      >
        <div className={`key-text color-${color}`}>
          {label}
        </div>
      </div>
    );
  }
}

export default FullKey;
