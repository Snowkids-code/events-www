import React from "react";
import { useCookies } from "react-cookie";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  //get user data from the redux store
  const currentUser = useSelector((state) => state.userReducer.user);
  //call the useCookies hook
  // eslint-disable-next-line
  const [cookies, setCookie] = useCookies(["user"]);

  //if user object is empty and there is no user cookie, navigate to '/login' route
  if (Object.keys(currentUser).length === 0 && cookies["user"] === undefined) {
    return <Navigate to="login" />;
  }

  //if one or both of the above conditions are not met, return the requested route
  return children;
}

export default ProtectedRoute;
