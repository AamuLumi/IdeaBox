'use strict';

import React, {Component} from 'react';
import NavBar from './global/NavBar/';
import './App.less';

export default class App extends Component {
  render() {
    return (
      <div className="app">

        <div className="pageContainer">
          <div className="container">
            {this.props.children}
          </div>
        </div>
        <NavBar/>
      </div>
    );
  }
}
