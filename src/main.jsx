import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./auth/AuthContext.jsx";
import DataContextProvider from "./Constdata/DataContextProvider.jsx";
import {Provider} from "react-redux";
import appStore from "../Cart/AppStore.js";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={appStore}>
    <BrowserRouter>
      <DataContextProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </DataContextProvider>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
