import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./Root/root";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Root />
  </StrictMode>
);
