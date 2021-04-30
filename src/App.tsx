import { useState, useMemo } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Login, Register, Dashboard } from "./screens";
import { Container } from "./components";
import { UserContext } from "./contexts/userContext";
import LocalStorageService from "./utils/localstorage";

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
              {loggedInUser ? <Dashboard /> : <Redirect to="/login" />}
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </Container>
  );
}

export default App;
