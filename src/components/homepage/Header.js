import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Line from "../helper/Line";
import Details from "./details/Details";
import HomeForm from "./HomeForm";

function Header() {
  return (
    <>
      <div className="header-wrapper-home">
        <Navbar className="navbar-home">
          <Logo />
          <a className="signin-button" href="/signin">
            Sign In
          </a>
        </Navbar>
        <div className="feature-wrapper-home">
          <h1 className="feature-title-home">
            Unlimited movies, TV shows and more.
          </h1>
          <h2 className="warning">This is NOT official Netflix</h2>
        </div>
        <div>
          <HomeForm />
        </div>
      </div>
      <Line />
      <Details />
    </>
  );
}

export default Header;
