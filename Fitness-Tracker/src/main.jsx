import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-browser-router";
import App from "./App.jsx";
import "./index.css";
import AuthProvider from "./components/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
