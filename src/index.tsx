import React from "react";
import ReactDOM from "react-dom";
import { Providers } from "state/providers";
import Main from "./main";
import "./index.css";

if (import.meta.env.PROD) {
  // Do not perform logging during production builds
  console.log = () => {};
  console.warn = () => {};
}

ReactDOM.render(<Main />, document.getElementById("root"));
