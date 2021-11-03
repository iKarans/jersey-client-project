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

  return (
    <div className="forgotten-password">
      <form>
        <input type="email" name="username" onInput={handleInput}></input>
      </form>
      <button className="--active" onClick={submitResetEmail}>
        Next
      </button>
      <p className="forgotten-password__login">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};
export default ForgottenPasswordForm;
