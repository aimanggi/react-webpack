import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// views
import Home from '../views/Home';


class AppRouter extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          />
        </Switch>
      </BrowserRouter>
    );
  };
}

export default AppRouter;
