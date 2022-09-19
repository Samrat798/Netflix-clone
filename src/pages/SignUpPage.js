import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FirebaseContext } from "../components/context/FirebaseContext";
import Footer from "../components/Footer/Footer";
import "../components/homepage/Home.css";
import Logo from "../components/homepage/Logo";
import Navbar from "../components/homepage/Navbar";
import "../components/signin/signform.css";
import SignFormBase from "../components/signin/SignFormBase";
import SignFormInput from "../components/signin/SignFormInput";

function SignUpPage() {
  const navigate = useNavigate();
  const { firebase } = useContext(FirebaseContext);

  const [firstName, setFirstName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const IsInvalid = password === "" || emailAddress === "" || firstName === "";

  function handleSubmit(event) {
    event.preventDefault();

    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((result) =>
        result.user
          .updateProfile({
            displayName: firstName,
          })
          .then(() => {
            setFirstName("");
            setEmailAddress("");
            setPassword("");
            navigate("/browse");
          })
      )
      .catch((error) => setError(error.message));
  }
  return (
    <>
      <div className="header-wrapper-home">
        <Navbar className="navbar-signin">
          <Logo />
        </Navbar>
        <div className="form-container">
          <SignFormBase onSubmit={handleSubmit} method="POST">
            <h2 className="warning">NOT officeal Netflix</h2>
            <h1 className="form-title">Sign Up</h1>
            {error ? <div className="form-error">{error}</div> : null}
            <SignFormInput
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
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
          <button className="form-Button" type="submit" disabled={IsInvalid}>
            Sign Up
          </button>
          <p className="form-text">
            Already a user?
            <a className="form-link" href="/signin">
              Sign in now.
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

export default SignUpPage;
