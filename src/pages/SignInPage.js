import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import Footer from "../components/Footer/Footer";
import "../components/homepage/Home.css";
import Logo from "../components/homepage/Logo";
import Navbar from "../components/homepage/Navbar";
import "../components/signin/signform.css";
import SignFormBase from "../components/signin/SignFormBase";
import SignFormInput from "../components/signin/SignFormInput";

function SignInPage() {
  const navigate = useNavigate();

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const IsInvalid = password === "" || emailAddress === "";

  function handleSubmit(event) {
    event.preventDefault();
    signInWithEmailAndPassword(auth, emailAddress, password)
      .then(async (Res) => {
        navigate("/home");
      })
      .catch((err) => setError(err.message));
  }
  return (
    <>
      <div className="header-wrapper-home">
        <Navbar className="navbar-signin">
          <Logo />
        </Navbar>
        <div className="form-container">
          <SignFormBase>
            <h2 className="warning">NOT officeal Netflix</h2>
            <h1 className="form-title">Sign In</h1>
            {error ? <div className="form-error">{error}</div> : null}
            <SignFormInput
              type="email"
              placeholder="Email Address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <SignFormInput
              type="password"
              placeholder="Password"
              autoComplete="off"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
          </SignFormBase>
          <button
            className="form-Button"
            onClick={handleSubmit}
            disabled={IsInvalid}
          >
            Sign In
          </button>
          <p className="form-text">
            Already a user?
            <a className="form-link" href="/signup">
              Sign up now.
            </a>
          </p>
          <p className="form-captcha">
            This page is protected by Google reCAPTCHA to ensure you are not a
            bot.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SignInPage;
