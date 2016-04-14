'use strict';

import React, { Component } from 'react';

export default class Jumbotron extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="bs-component">
            <div className="jumbotron">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
