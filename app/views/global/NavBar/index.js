'use strict';

import React, {Component} from 'react';
import {Link} from 'react-router';
import './NavBar.less';

export default class NavBar extends Component {
  render() {
    return (
      <div className="v-navbar">
        <div className="bs-component">
          <div className="navbar nabvar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <Link className="navbar-brand" to="/">theIdeabox</Link>
              </div>
              <div className="navbar-collapse">
                <ul className="nav navbar-nav navbar-right">
                  <li><Link to='/'>Créer</Link></li>
                  <li><Link to='search'>Rechercher</Link></li>
                  <li className="dropdown">
                    <Link to='#' className="dropdown-toggle" data-toggle="dropdown">
                      Connexion
                      <b className="caret"></b>
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link to='/'>Connexion</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
