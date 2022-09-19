import React from "react";
import { useContext } from "react";
import FAQContext from "./FAQContext";
import "./faq.css";

function FAQHeader({ children, ...restProps }) {
  const [FaqShow, setFaqShow] = useContext(FAQContext);

  function handleClick() {
    setFaqShow(!FaqShow);
  }

  return (
    <div className="faq-header" onClick={handleClick} {...restProps}>
      {children}
      {FaqShow ? (
        <img
          className="faq-image"
          src="../images/icons/close-slim.png"
          alt="Close"
        />
      ) : (
        <img className="faq-image" src="../images/icons/add.png" alt="Open" />
      )}
    </div>
  );
}

export default FAQHeader;
