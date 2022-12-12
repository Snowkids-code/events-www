import React, { Suspense, useContext } from "react";
import { useSelector } from "react-redux";
import { AuthContext } from "../context/authContext";
const Admin = React.lazy(() => import("../pages/Admin"));
const Client = React.lazy(() => import("./Client/index.js"));

function HomePage() {
  const currentUser = useSelector((state) => state.userReducer);
  console.log(currentUser.user.isAdmin);

  if (currentUser.user.isAdmin) {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Admin />
      </Suspense>
    );
  } else if (!currentUser.user.isAdmin) {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Client />
      </Suspense>
    );
  } else {
    return <div>Usertype required for redirect</div>;
  }
  // return (
  //   <div>Hello</div>
  // )
}

export default HomePage;
