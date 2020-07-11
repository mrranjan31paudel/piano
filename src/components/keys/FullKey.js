import React, { Component } from 'react';

class FullKey extends Component {
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
    const { id, label, color } = this.props;

    return (
      <div
        className={`key-full${isPressed ? ' pressed' : ''}`}
        id={id}
        onMouseDown={this.handleKeyPress}
        onMouseUp={this.handleKeyRelease}
      >
        <div className={`key-text color-${color}`}>
          {label}
        </div>
      </div>
    );
  }
}

export default FullKey;
