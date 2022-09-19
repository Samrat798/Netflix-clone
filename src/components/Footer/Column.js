import React from "react";
import "./footer.css";

function Column({ children, ...restProps }) {
  return (
    <div className="footer-column" {...restProps}>
      {children}
    </div>
  );
}

export default Column;
