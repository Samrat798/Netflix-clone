import React from "react";
import "./line.css";

function Line({ children, ...restProps }) {
  return (
    <div className="devider" {...restProps}>
      {children}
    </div>
  );
}

export default Line;
