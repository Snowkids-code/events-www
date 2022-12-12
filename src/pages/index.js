import React, { Suspense, useContext } from "react";
import { AuthContext } from "../context/authContext";
const Admin = React.lazy(() => import("../pages/Admin"));
const Client = React.lazy(() => import("./Client/index.js"));

function HomePage() {
  const { currentUser } = useContext(AuthContext);

  if (currentUser.type === "Admin") {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Admin />
      </Suspense>
    );
  } else if (currentUser.type === "Client") {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Client />
      </Suspense>
    );
  } else {
  }

  // return (
  //   <div>

  //   </div>
  // )
}

export default HomePage;
