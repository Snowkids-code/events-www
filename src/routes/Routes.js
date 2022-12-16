import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { Route, Navigate, Routes, Outlet } from "react-router-dom";
import NavbarAdmin from "../components/Layout/Admin/navbar-admin";
import SidebarAdmin from "../components/Layout/Admin/sidebar-admin";
import Footer from "../components/Layout/Footer";
import Navbar from "../components/Layout/Navbar";
import HomePage from "../pages";
import EventsAdmin from "../pages/Admin/EventsAdmin";
import OrdersAdmin from "../pages/Admin/OrdersAdmin";
import Login from "../pages/authentication/Login";
import Cart from "../pages/cart/Cart";
import Event from "../pages/events-page/Event";
import Events from "../pages/events-page/Events";
import NotFound from "../pages/not-found";
import { fetchUserById } from "../reducers/user.reducer";

function Routers() {
  //get user data from the redux store
  const currentUser = useSelector((state) => state.userReducer.user);
  //call the useCookies hook
  const [cookies, setCookie] = useCookies(["user"]);
  //call the useDispatch hook
  const dispatch = useDispatch();

  //set cookie depending on its availability using the useEffect hook
  useEffect(() => {
    //check if the user cookie has not been set but the user data is available
    if (
      Object.keys(currentUser).length !== 0 &&
      cookies["user"] === undefined
    ) {
      setCookie("user", currentUser._id, { path: "/" });
    }
    //check to see if there's no user data in the store but the user cookie has data
    else if (
      Object.keys(currentUser).length === 0 &&
      cookies["user"] !== undefined
    ) {
      //dispatch the method to set user id to the store
      dispatch(fetchUserById(cookies["user"]));
    }
  });

  //pre-defined admin layout i.e navbar and sidebar
  const AdminLayout = () => {
    return (
      <div>
        <NavbarAdmin />
        <div className="flex max-[1000px]:block">
          <SidebarAdmin />
          <div style={{ flex: "10" }} className='admin-main-container'>
            <Outlet />
          </div>
        </div>
      </div>
    );
  };

  //determine if the user is logged in before accessing a route
  const ProtectedRoute = ({ children }) => {
    //if user object is empty and there is no user cookie, navigate to '/login' route
    if (
      Object.keys(currentUser).length === 0 &&
      cookies["user"] === undefined
    ) {
      return <Navigate to="login" />;
    }

    //if one or both of the above conditions are not met, return the requested route
    return children;
  };

  //predefined client page layout i.e navbar nad footer
  const Layout = () => {
    return (
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };

  return (
    <>
      <Routes>
      {/* navigate to the login page if user tries to access the homepage while not logged in */}
        <Route
          path="/"
          exact
          element={
            Object.keys(currentUser).length === 0 ? (
              <Navigate to="/login" />
            ) : (
              <HomePage />
            )
          }
        />
        {/* navigate to the homepage if user tries to access the login page while logged in */}
        <Route
          exact
          path="/login"
          element={
            Object.keys(currentUser).length !== 0 ? (
              <Navigate to="/" />
            ) : (
              <Login />
            )
          }
        />
        {/* user side routes covered by the layout i.e the footer and navbar and including the protected routing */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<Event />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
        {/* admin side routes covered by the layout i.e the sidebar and the navbar and includes the protected routing too */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route path="admin/events" element={<EventsAdmin />} />
          <Route path="admin/orders" element={<OrdersAdmin />} />
        </Route>
        {/*incase the accessed route is not available*/}
        <Route path="*" element={<NotFound />} />{" "}
      </Routes>
    </>
  );
}

export default Routers;
