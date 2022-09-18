import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import PageOverlay from "./components/layouts/pageOverlay/PageOverlay";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <PageOverlay>
      <App />
    </PageOverlay>
  </BrowserRouter>
);
