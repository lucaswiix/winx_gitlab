import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/dashboard';
import SprintStatics from './pages/sprint-statics';

export default function Routes(){
    return (
        <BrowserRouter>
          <Switch>
              <Route path="/" exact component={Login} />
          </Switch>
        </BrowserRouter>
    );
}