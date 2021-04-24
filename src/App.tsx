import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Login } from "./screens";
import Home from "./screens/home";
import { Register } from "./screens";
import Container from "./components/Container";
//ROUTE TO BE MADE PRIVATE BASED ON PERMISSION
function App() {
  return (
    <Container className="text-primary bg-secondary h-full  overflow-auto">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Redirect to={{ pathname: "/" }} />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
