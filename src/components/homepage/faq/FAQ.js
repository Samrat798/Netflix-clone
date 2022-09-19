import React from "react";
import "./faq.css";
import FAQData from "../../../data/faqs.json";
import FAQItem from "./FAQItem";
import FAQHeader from "./FAQHeader";
import FAQBody from "./FAQBody";
import HomeForm from "../HomeForm";

function FAQ() {
  return (
    <>
      <div className="faq-wrapper">
        <h1 className="faq-title">Frequently Asked Questions</h1>
        {FAQData.map((item) => (
          <FAQItem key={item.id}>
            <FAQHeader>{item.header}</FAQHeader>
            <FAQBody>{item.body}</FAQBody>
          </FAQItem>
        ))}
      </div>
      <HomeForm />
    </>
  );
}

export default FAQ;
