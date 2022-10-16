import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import KeyBoard from './components/KeyBoard';

import './style/layout.css';
import './style/common.css';
import './style/style.css';

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <BrowserRouter>
          <Switch>
            <Route exact path="/piano">
              <Redirect to="/" />
            </Route>
            <Route exact path="/" component={KeyBoard} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
