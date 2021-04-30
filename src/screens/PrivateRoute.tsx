import React from "react";
import { RouteProps } from "react-router";
import { Redirect, Route } from "react-router-dom";
import { useUserContext } from "../contexts/userContext";

interface PrivateRouteProps extends RouteProps {
  permission?: string[];
}

const PrivateRoute = ({
  component: Component = React.Fragment,
  permission,
  ...rest
}: PrivateRouteProps) => {
  const { loggedInUser } = useUserContext();

  console.log(loggedInUser)
  console.log(permission)
  return (
    <Route
      {...rest}
      render={(props) =>
        loggedInUser ? (
          permission ? (
            <Component {...props} />
          ) : (
            <Redirect to="/home" />
          )
        ) : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
