import React, { Component } from 'react';

import FullKey from './keys/FullKey';
import HalfKey from './keys/HalfKey';

const fullKeysList = [
  {
    id: 'c3',
    label: 'C3',
    color: 'red'
  },
  {
    id: 'd3',
    label: 'D3',
    color: 'orange'
  },
  {
    id: 'e3',
    label: 'E3',
    color: 'yellow'
  },
  {
    id: 'f3',
    label: 'F3',
    color: 'green'
  },
  {
    id: 'g3',
    label: 'G3',
    color: 'cyan'
  },
  {
    id: 'a3',
    label: 'A3',
    color: 'blue'
  },
  {
    id: 'b3',
    label: 'B3',
    color: 'magenta'
  },
  {
    id: 'c4',
    label: 'C4',
    color: 'red'
  }
];

const halfKeyList = [
  {
    id: 'c3s',
    leftPos: '58'
  },
  {
    id: 'd3s',
    leftPos: '140'
  },
  {
    id: 'f3s',
    leftPos: '304'
  },
  {
    id: 'g3s',
    leftPos: '386'
  },
  {
    id: 'a3s',
    leftPos: '468'
  }
]

class KeyBoard extends Component {

  render() {
    return (
      <>
        <div className="full-keys-container">
          {
            fullKeysList.map(key => (
              <FullKey {...key} />
            ))
          }
          {
            halfKeyList.map(key => (
              <HalfKey {...key} />
            ))
          }
        </div>

      </>
    );
  }
}

export default KeyBoard;
