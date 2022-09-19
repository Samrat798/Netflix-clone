import React from "react";
import "./signform.css";

function SignFormBase({ children, ...restProps }) {
  return (
    <form className="form-base" {...restProps}>
      {children}
    </form>
  );
}

export default SignFormBase;
