import React from "react";
import { useContext } from "react";
import FAQContext from "./FAQContext";
import "./faq.css";

function FAQBody({ children, ...restProps }) {
  const [FaqShow, setFaqShow] = useContext(FAQContext);

  return FaqShow ? (
    <div className="faq-body" {...restProps}>
      {children}
    </div>
  ) : null;
}

export default FAQBody;
