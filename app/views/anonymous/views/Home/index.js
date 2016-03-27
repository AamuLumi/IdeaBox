'use strict';

import React, {Component} from 'react';
import {Link} from 'react-router';
import './Home.less';

export default class Home extends Component {
  render() {
    return (
      <div className="v-home">
        <div className="titlePanel">
          <h1>theIdeabox</h1>
          <h2>This is a super sentence here.</h2>
        </div>
        <div className="buttonPanel">
          <div className="row">
            <Link className="btn btn-raised btn-lg" to="/">Plus d'informations</Link>
          </div>
          <div className="row">
            <Link className="btn btn-raised btn-lg" to="/">Donner une idée</Link>
            <Link className="btn btn-raised btn-lg" to="search">Rechercher une idée</Link>
          </div>
        </div>
      </div>
    );
  }
}
