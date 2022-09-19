import React from "react";
import "./signform.css";

function SignFormInput({ ...restProps }) {
  return <input className="form-input" {...restProps} />;
}

export default SignFormInput;
