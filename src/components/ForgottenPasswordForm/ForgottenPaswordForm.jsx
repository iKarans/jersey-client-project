import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import { sendSignInLinkToEmail } from "firebase/auth";
import "./ForgottenPasswordForm.scss";

const ForgottenPasswordForm = () => {
  const [userEmail, setUserEmail] = useState("");
  const actionCodeSettings = {
    url: "http://localhost:3000/reset-password",

    handleCodeInApp: true,
  };

  const handleInput = (event) => {
    const emailInput = event.target.value;
    setUserEmail(emailInput);
  };
  const submitResetEmail = () => {
    sendSignInLinkToEmail(auth, userEmail, actionCodeSettings)
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
      <form className="forgotten-password forgotten-password--form ">
        <input type="email" name="username" onInput={handleInput}></input>
        {buttonJSX()}
        <p className="forgotten-password__login">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};
export default ForgottenPasswordForm;
