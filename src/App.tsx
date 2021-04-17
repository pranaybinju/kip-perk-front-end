import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Login } from "./screens";
import { Register } from "./screens";
import Container from "./components/Container";
//ROUTE TO BE MADE PRIVATE BASED ON PERMISSION
function App() {
  return (
    <Container className="text-primary bg-secondary h-full">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Redirect to={{ pathname: "/login" }} />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
