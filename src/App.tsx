import React from 'react';
import {
  BrowserRouter as Router,
  Switch, Route
} from 'react-router-dom';

import { Login } from './components';
import { Register } from './components';
import { Reset } from './components';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/reset">
          <Reset />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
