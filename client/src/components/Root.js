import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Register from '../components/Register/Register';
import Login from '../components/Login/Login';
import Journal from '../components/Journal/Journal';

import './Root.css';


class Root extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Register} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/journal" component={Journal} />
        </Switch>
      </Router>
    );
  }
}


export default Root;
