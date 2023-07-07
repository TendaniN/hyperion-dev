import React from "react";
import ReactDOM from "react-dom";
import Main from "./main";
import "design-tokens.css";

if (import.meta.env.PROD) {
  // Do not perform logging during production builds
  console.log = () => {};
  console.warn = () => {};
}

ReactDOM.render(<Main />, document.getElementById("root"));
