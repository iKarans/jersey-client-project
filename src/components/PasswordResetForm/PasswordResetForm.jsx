import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import ShowPassword from "../../assets/login/show-password.svg";
import HidePassword from "../../assets/login/hide-password.svg";

import { ReactComponent as ValidInputIcon } from "../../assets/login/green-tick.svg";
import { ReactComponent as InvalidInputIcon } from "../../assets/login/red-cross.svg";
import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
import "./PasswordResetForm.scss";

const PasswordResetForm = () => {
  let history = useHistory();
  const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: "",
    handleCodeInApp: true,
  };
  const auth = getAuth();
  sendSignInLinkToEmail(auth, email, actionCodeSettings)
    .then(() => {
      window.localStorage.setItem("emailForSignIn", email);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ...
    });

  const handleInput = (event) => {
    const userInput = event.target.value;
    const userInputName = event.target.name;
    const userInputsObj = { ...userDetails, [userInputName]: userInput };
    setUserDetails(userInputsObj);
  };
  sendSignInLinkToEmail(auth, userDetails.email, actionCodeSettings)
    .then(() => {
      // The link was successfully sent. Inform the user.
      // Save the email locally so you don't need to ask the user for it again
      // if they open the link on the same device.
      window.localStorage.setItem("emailForSignIn", email);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });

  const buttonJSX = () => {
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(userDetails.email)) {
      return (
        <button
          className="password-reset-form__button--active"
          onClick={sendSignInLinkToEmail}
        >
          Submit
        </button>
      );
    } else {
      return (
        <button className="password-reset-form__button--disabled" disabled>
          Submit
        </button>
      );
    }
  };

  const inputJSX = () => {
    return (
      <>
        <div className="password-reset-form__rectangle"></div>
        <h3 className="password-reset-form__header">Sign Up</h3>
        <label htmlFor="email" className="password-reset-form__label">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="login-form__input"
          value={userDetails.email}
          onChange={handleInput}
        />
      </>
    );
  };
  return (
    <div className="password-reset">
      <form
        action="submit"
        className="password-reset-form"
        onSubmit={handlepassword - reset}
      >
        {inputJSX()}
        {buttonJSX()}
      </form>
      <p className="password-reset-login">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default PasswordResetForm;
