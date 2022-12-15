import React, { Suspense, useContext } from "react";
import { useSelector } from "react-redux";
import { AuthContext } from "../context/authContext";
//use React.lazy to lazy load the admin and the client component
const Admin = React.lazy(() => import("../pages/Admin"));
const Client = React.lazy(() => import("./Client/index.js"));

function HomePage() {
  //get the user data from the redux store
  const currentUser = useSelector((state) => state.userReducer);

  //if user type is admin, redirect the user to the admin page
  if (currentUser.user.isAdmin) {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Admin />
      </Suspense>
    );
  } 
  //if the user is not an admin, redirect them to the client page
  else if (!currentUser.user.isAdmin) {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Client />
      </Suspense>
    );
  } 
  //if there is no user type, display a message on the screen
  else {
    return <div>Usertype required for redirect</div>;
  }
}

export default HomePage;
