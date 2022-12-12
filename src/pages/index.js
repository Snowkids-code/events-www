import React, { Suspense, useContext } from "react";
import { AuthContext } from "../context/authContext";
const Admin = React.lazy(() => import("../pages/Admin"));
const Client = React.lazy(() => import("./Client/index.js"));

function HomePage() {
  const { currentUser } = useContext(AuthContext);

  if (currentUser.isAdmin) {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Admin />
      </Suspense>
    );
  } else if (!currentUser.isAdmin) {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Client />
      </Suspense>
    );
  } else {
    return <div>Usertype required for redirect</div>;
  }
}

export default HomePage;
