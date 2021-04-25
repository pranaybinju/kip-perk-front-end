import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import {
  Login,
  Register,
  Dashboard
} from "./screens";
import { Container } from "./components";

// TODO: Route to be made private based on permissions
function App() {
  return (
    <Container className="text-primary bg-secondary h-full overflow-auto">
      <Router>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/register">
            <Register />
          </Route>

          <Route path="/">
            <Dashboard />
          </Route>
          <Redirect to={{ pathname: "/" }} />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
