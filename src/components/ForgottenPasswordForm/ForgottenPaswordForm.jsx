import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import "./ForgottenPasswordForm.scss";

const ForgottenPasswordForm = () => {
  const [userEmail, setUserEmail] = useState("");

  const handleInput = (event) => {
    const emailInput = event.target.value;
    setUserEmail(emailInput);
  };
  const submitResetEmail = () => {
    sendPasswordResetEmail(auth, userEmail)
      .then(() => {})
      .catch((error) => {});
  };
  const buttonJSX = () => {
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(userEmail)) {
      return (
        <button
          className="forgotten-password__login forgotten-password__login--button"
          onClick={submitResetEmail}
        >
          Next
        </button>
      );
    } else {
      return (
        <button className="forgotten-password__login forgotten-password__login--button">
          Next
        </button>
      );
    }
  };

  return (
    <div className="forgotten-password">
      <div className="forgotten-password forgotten-password-form ">
        <h3 className="forgotten-password-form__header">
          Forgotten your Password?
        </h3>
        <p className="forgotten-password-form__text">
          {" "}
          Not to worry! It happens to the best of us. Enter your email addresss
          below and we’ll send you a link to reset your password.{" "}
        </p>
        <input
          type="email"
          name="username"
          className="forgotten-password-form__input"
          onInput={handleInput}
        ></input>
        {buttonJSX()}
        <p className="forgotten-password__login">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};
export default ForgottenPasswordForm;
