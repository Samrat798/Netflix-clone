import React from "react";
import "./footer.css";

function Link({ children, ...restProps }) {
  return (
    <a href="#" className="footer-link" {...restProps}>
      {children}
    </a>
  );
}

export default Link;
