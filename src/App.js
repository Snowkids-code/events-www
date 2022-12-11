import { useContext } from "react";
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
import Login from "./pages/authentication/Login";
import Register from "./pages/authentication/Register";
import Cart from "./pages/cart/Cart";
import Event from "./pages/events-page/Event";
import Events from "./pages/events-page/Events";
import Homepage from "./pages/homepage/Homepage";
import "./styles/App.css";

function App() {
  const { currentUser } = useContext(AuthContext);

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
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/events",
          element: <Events />,
        },
        {
          path: "/events/:id",
          element: <Event />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
      ],
      errorElement: <Homepage />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
