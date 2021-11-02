import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import { sendSignInLinkToEmail } from "firebase/auth";
import "./ForgottenPasswordForm.scss";

const ForgottenPasswordForm = () => {
  const [userEmail, setUserEmail] = useState("");

  const handleInput = (event) => {
    const emailInput = event.target.value;
    setUserEmail(emailInput);
  };
  const submitResetEmail = () => {};

  const buttonJSX = () => {
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(userEmail)) {
      return (
        <button className="--active" onClick={submitResetEmail}>
          Next
        </button>
      );
    } else {
      return (
        <button className="--disabled" disabled>
          Next
        </button>
      );
    }
  };
  return (
    <div className="forgotten-password">
      <form>
        <input type="email" name="username" onInput={handleInput}></input>
      </form>
      {buttonJSX}
      <p className="forgotten-password__login">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};
export default ForgottenPasswordForm;
