'use strict';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from './views/App';
import {Provider} from 'react-redux';
import Store from './reducers';

import Home from './views/anonymous/views/Home';
import Search from './views/anonymous/views/Search';

export default class Root extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route name="app" path="/" component={App}>
          <IndexRoute name="home" component={Home}>

          </IndexRoute>
          <Route name="search" path="search" component={Search}>

          </Route>
        </Route>
      </Router>
    );
  }
}

ReactDOM.render(
  <Provider store={Store}>
    <Root/>
  </Provider>,
  document.getElementById('app'));
