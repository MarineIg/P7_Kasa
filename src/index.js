import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/main.scss";
import HousingProvider from "./contexts/HousingContext";

/**
 * This file renders the React application.
 * It provides the SelectedHousingId and Housing contexts to the application.
 */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <HousingProvider>
        <App />
      </HousingProvider>
  </React.StrictMode>
);
