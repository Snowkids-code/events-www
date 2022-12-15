import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import "./scss/main.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthContextProvider } from "./context/authContext";
import { Provider } from "react-redux";
import store from "./store";
import { CookiesProvider } from "react-cookie";
import { Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CookiesProvider>
      <Provider store={store}>
        <AuthContextProvider>
            <App />
        </AuthContextProvider>
      </Provider>
    </CookiesProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
