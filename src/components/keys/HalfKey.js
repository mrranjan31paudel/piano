import React from 'react';

import KeyBase from './KeyBase';

const horseSrc = 'http://localhost:3000/piano/sounds/horse.mp3';

class HalfKey extends KeyBase {
  constructor(props) {
    super(horseSrc, props);
  }

  render() {
    const {
      id,
      label,
      leftPos,
      pressedKeys,
      repKey,
      handleKeyDown,
      handleKeyUp
    } = this.props;

    return (
      <div
        className={`key-half${pressedKeys[repKey] ? ' pressed' : ''} pos-${leftPos}`}
        id={id}
        onMouseDown={() => handleKeyDown({ key: repKey })}
        onMouseUp={() => handleKeyUp({ key: repKey })}
      >
        <div className="key-text color-white">
          {label}
        </div>
      </div>
    );
  }
}

export default HalfKey;
