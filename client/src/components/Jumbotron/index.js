import React from "react";
import "./jumbotron.css";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 180, clear: "both", paddingTop: 20, textAlign: "center" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
