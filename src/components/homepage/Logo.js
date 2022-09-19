import React from "react";
import "./Home.css";

function Logo({ children, ...restProps }) {
  return (
    <div>
      <a href="/" {...restProps}>
        {children}
        <img className="logo" src="./images/misc/logo.svg" alt="Netflix Logo" />
      </a>
    </div>
  );
}

export default Logo;
