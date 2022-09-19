import React from "react";
import "./Home.css";

function HomeForm() {
  return (
    <>
      <p className="home-form-text">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div className="home-form-container">
        <input
          className="home-form-email"
          type="email"
          placeholder="Email Address"
        />
        <a className="home-form-button" href="/signUp">
          Get Started
          <img
            className="home-form-button-image"
            src="../images/icons/chevron-right.png"
            alt="Try Now"
          />
        </a>
      </div>
    </>
  );
}

export default HomeForm;
