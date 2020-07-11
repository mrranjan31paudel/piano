import React, { Component } from 'react';

class HalfKey extends Component {
  constructor() {
    super();

    this.state = {
      isPressed: false
    };
  }

  setIsPressed = (pressedState) => {
    this.setState({
      isPressed: pressedState
    });
  }

  handleKeyPress = () => {
    this.setIsPressed(true);
  }

  handleKeyRelease = () => {
    this.setIsPressed(false);
  }

  render() {
    const { isPressed } = this.state;
    const { id, leftPos } = this.props;

    return (
      <div
        className={`key-half${isPressed ? ' pressed' : ''} pos-${leftPos}`}
        id={id}
        onMouseDown={this.handleKeyPress}
        onMouseUp={this.handleKeyRelease}
      >
        {/* <div className={`key-text color-${color}`}>
          {label}
        </div> */}
      </div>
    );
  }
}

export default HalfKey;
