import React, { useContext, useEffect } from "react";
import { Redirect, Route, useHistory } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const history = useHistory();
  const { token } = useContext(AuthContext);
  const currentLocation = window.location.pathname;
  const endPoints = ["/", "/messanger", "/editProfile"];
  console.log(currentLocation);
  useEffect(() => {
    // console.log("location = ", currentLocation);
    // endPoints.forEach((l) => {
    //   if (token && l !== currentLocation) {
    //     history.push("/");
    //   }
    // });
  }, [history]);

  return (
    <Route
      {...rest}
      render={(props) =>
        token ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/auth/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
