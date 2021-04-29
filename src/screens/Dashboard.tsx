import React from "react";
import {
  NavLink,
  Switch,
  Route,
  useLocation,
  useHistory,
} from "react-router-dom";
import { LogoutIcon } from "@heroicons/react/solid";
import { FaHome, FaStamp } from "react-icons/fa";
import { AiOutlineFileSearch } from "react-icons/ai";
import { useUserContext } from "../contexts/userContext";
import { Text, Button, Container, Image } from "../components";
import { Claim, Home, Verify } from "./";
import PrivateRoute from "./PrivateRoute";
import LocalStorageService from "../utils/localstorage";

function Dashboard() {
  const location = useLocation();
  const { loggedInUser, setCurrentUser } = useUserContext();
  const history = useHistory();

  return (
    <React.Fragment>
      <nav className="z-10 fixed top-0 left-0 right-0 w-full bg-gray-800  h-16 shadow-md flex items-center justify-between h-screen-10">
        <Container className="flex flex-row">
          <Image
            className="block mx-4 rounded-full h-10 w-10 object-cover"
            src={
              //loggedInUser?.ImageURL ??
              "https://images.unsplash.com/photo-1548546738-8509cb246ed3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
            }
          />
          <Text className="self-center font-medium text-white">
            {`${loggedInUser?.FirstName} ${loggedInUser?.LastName}`}{" "}
          </Text>
        </Container>

        <Container className="self-stretch flex">
          <NavLink
            to="/"
            exact
            className="mx-2 pt-3 h-10 w-10 rounded-b-full flex items-center justify-center box-content border border-t-0 border-transparent hover:border-yellow-500"
            activeClassName="bg-yellow-500"
          >
            <FaHome
              className={`h-5 w-5 ${
                location.pathname === "/" ? "text-white" : "text-yellow-500"
              }`}
            />
          </NavLink>
          <NavLink
            to="/claim"
            className="mx-2 pt-3 h-10 w-10 rounded-b-full flex items-center justify-center box-content border border-t-0 border-transparent hover:border-yellow-500"
            activeClassName="bg-yellow-500"
          >
            <FaStamp
              className={`h-5 w-5 ${
                location.pathname === "/claim"
                  ? "text-white"
                  : "text-yellow-500"
              }`}
            />
          </NavLink>
          {loggedInUser.CanVerifyClaims && (
            <NavLink
              to="/verify"
              className="mx-2 pt-3 h-10 w-10 rounded-b-full flex items-center justify-center box-content border border-t-0 border-transparent hover:border-yellow-500"
              activeClassName="bg-yellow-500"
            >
              <AiOutlineFileSearch
                className={`h-6 w-6 ${
                  location.pathname === "/verify"
                    ? "text-white"
                    : "text-yellow-500"
                }`}
              />
            </NavLink>
          )}
        </Container>
        <Button
          onClick={() => {
            LocalStorageService.deleteItem("loggedInUser");
            history.push("/login");
          }}
          className="mx-4 border border-red-500 group hover:bg-red-500 h-10 w-10 rounded-full flex items-center justify-center"
        >
          <LogoutIcon className="h-5 w-5 text-red-500 group-hover:text-white" />
        </Button>
      </nav>

      <main className="mt-20 w-11/12 m-auto overflow-auto">
        <Switch>
          <Route path="/claim">
            <Claim />
          </Route>

          <PrivateRoute
            permission={loggedInUser.CanVerifyClaims}
            component={Verify}
            exact
            path="/verify"
          ></PrivateRoute>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default Dashboard;
