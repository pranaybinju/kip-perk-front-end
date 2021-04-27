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
  console.log(loggedInUser);
  return (
    <>
      <Route
        {...rest}
        render={(props) =>
          loggedInUser ? (
            <>
              {/* {canClaim ? (
                
              ) : (
                <Redirect to={{ pathname: "/" }} />
              )} */}
              <Component {...props} />
            </>
          ) : (
            <Redirect to={"/login"} />
          )
        }
      />
    </>
  );
};

export default PrivateRoute;
