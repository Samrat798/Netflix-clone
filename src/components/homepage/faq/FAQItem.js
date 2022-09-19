import React, { useState } from "react";
import FAQContext from "./FAQContext";
import "./faq.css";

function FAQItem({ children, ...restProps }) {
  const [FaqShow, setFaqShow] = useState(false);

  return (
    <FAQContext.Provider value={[FaqShow, setFaqShow]} {...restProps}>
      <div className="faq-item">{children}</div>
    </FAQContext.Provider>
  );
}

export default FAQItem;
