/*
 * routes.js
 *
 */

import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from './components/app';
import Home from './components/home';


export default (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
);
