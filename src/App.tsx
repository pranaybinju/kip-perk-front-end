import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./screens/Login";
import Verifications from "./screens/Verifications";
import Home from "./screens/home";
import Register from "./screens/Register";
import Container from "./components/Container";
//ROUTE TO BE MADE PRIVATE BASED ON PERMISSION
function App() {
  return (
    <Container className="text-primary bg-secondary h-full  overflow-auto">
      <Router>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/verify">
            <Verifications />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Redirect to={{ pathname: "/" }} />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
