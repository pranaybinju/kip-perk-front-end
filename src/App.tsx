import React, { useState, useMemo } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Login, Register, Dashboard, Home, PrivateRoute } from "./screens";
import { Container } from "./components";
import { UserContext } from "./contexts/userContext";
import LocalStorageService from "./utils/localstorage";

// TODO: Route to be made private based on permissions
function App() {
  const [loggedInUser, setCurrentUser] = useState(
    LocalStorageService.readItem("loggedInUser")
      ? JSON.parse(
          //@ts-ignore
          LocalStorageService.readItem("loggedInUser")
        )
      : null
  );

  const userProvider = useMemo(() => ({ loggedInUser, setCurrentUser }), [
    loggedInUser,
    setCurrentUser,
  ]);
  return (
    <Container className="bg-secondary h-full overflow-auto">
      <UserContext.Provider value={userProvider}>
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

            <PrivateRoute component={Dashboard} path="/"></PrivateRoute>

            <Redirect to={{ pathname: "/login" }} />
          </Switch>
        </Router>
      </UserContext.Provider>
    </Container>
  );
}

export default App;
