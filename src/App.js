import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./styles/App.css";
import { getAllEventsThunk } from "./reducers/event.reducer";
import { useDispatch } from "react-redux";
import Routers from "./routes/Routes";

function App() {
  //call the useDispatch hook
  const dispatch = useDispatch();

  //fetch all the events on app load
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
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </div>
  );
}

export default App;
