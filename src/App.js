import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Footer from "./components/Layout/Footer";
import Navbar from "./components/Layout/Navbar";
import logo from "./logo.svg";
import Cart from "./pages/cart/Cart";
import Event from "./pages/events-page/Event";
import Events from "./pages/events-page/Events";
import Homepage from "./pages/homepage/Homepage";
import "./styles/App.css";

function App() {
  const Layout = () => {
    return (
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
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
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
