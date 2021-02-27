import React, { Component } from 'react';

class KeyBase extends Component {
  constructor(horseSrc, props) {
    super();

    this.audio = new Audio(horseSrc);
  }

  componentDidUpdate(prevProps) {
    const { pressedKeys, repKey } = this.props;

    if (prevProps.pressedKeys[repKey] && !pressedKeys[repKey]) {
      return this.stopSound();
    }

    if (pressedKeys[repKey]) {
      this.playSound();
    }
  }

  playSound = () => {
    this.audio.play()
      .then(res => console.log('Played: ', res))
      .catch(err => console.log('Could not play due to : ', err));
  }

  stopSound = () => {
    this.audio.pause();
    this.audio.currentTime = 0;
  }

  render() {
    return (
      <></>
    );
  }
}

export default KeyBase;
