import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "overlayscrollbars/css/OverlayScrollbars.css";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

ReactDOM.render(
  <OverlayScrollbarsComponent style={{ width: "100%", height: "100%" }}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </OverlayScrollbarsComponent>,
  document.getElementById("root")
);
