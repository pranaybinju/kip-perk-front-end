import React, { useState, useMemo } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { UserContext } from "./contexts/userContext";
import PrivateRoute from "./screens/PrivateRoute";
import Login from "./screens/Login";
import Verifications from "./screens/Verifications";
import Home from "./screens/home";
import Register from "./screens/Register";
import Container from "./components/Container";
import LocalStorageService from "./utils/localstorage";

function App() {
  const [loggedInUser, setCurrentUser] = useState(
    LocalStorageService.readItem("loggedInUser")
  );

  const userProvider = useMemo(() => ({ loggedInUser, setCurrentUser }), [
    loggedInUser,
    setCurrentUser,
  ]);
  return (
    <Container className="text-primary bg-secondary h-full  overflow-auto">
      <UserContext.Provider value={userProvider}>
        <Router>
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>

            <Route exact path="/register">
              <Register />
            </Route>
            <PrivateRoute
              component={Verifications}
              exact
              path="/verify"
            ></PrivateRoute>
            <PrivateRoute component={Home} path="/"></PrivateRoute>
            <Redirect to={{ pathname: "/login" }} />
          </Switch>
        </Router>
      </UserContext.Provider>
    </Container>
  );
}

export default App;
