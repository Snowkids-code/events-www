import { useContext, useEffect } from "react";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Footer from "./components/Layout/Footer";
import Navbar from "./components/Layout/Navbar";
import { AuthContext } from "./context/authContext";
import logo from "./logo.svg";
import AdminDashboard from "./pages/Admin";
import Login from "./pages/authentication/Login";
import Register from "./pages/authentication/Register";
import Cart from "./pages/cart/Cart";
import Event from "./pages/events-page/Event";
import Events from "./pages/events-page/Events";
import Homepage from "./pages/Client";
import "./styles/App.css";
import HomePage from "./pages";
import { getAllEventsThunk } from "./reducers/event.reducer";
import { useDispatch } from "react-redux";
import NotFound from "./pages/not-found";
import EventsAdmin from "./pages/Admin/EventsAdmin";
import OrdersAdmin from "./pages/Admin/OrdersAdmin";

function App() {
  const { currentUser } = useContext(AuthContext);
  const dispatch = useDispatch();

  const Layout = () => {
    return (
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/events",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/events",
          element: <Events />,
        },
        {
          path: "/events/:id",
          element: <Event />,
        },
      ],
      errorElement: <NotFound />,
    },
    {
      path: "/cart",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/cart",
          element: <Cart />,
        },
      ],
    },
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <HomePage />
        </ProtectedRoute>
      ),
      errorElement: <NotFound />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/admin/events",
      element: <EventsAdmin />,
    },
    {
      path: "/admin/orders",
      element: <OrdersAdmin />,
    },
    { errorElement: <NotFound /> },
  ]);

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      dispatch(getAllEventsThunk());
    }

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
