import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import ShowPassword from "../../assets/login/show-password.svg";
import HidePassword from "../../assets/login/hide-password.svg";

import { ReactComponent as ValidInputIcon } from "../../assets/login/green-tick.svg";
import { ReactComponent as InvalidInputIcon } from "../../assets/login/red-cross.svg";
import { sendSignInLinkToEmail} from "firebase/auth";
import { auth } from "../../firebase";

import "./PasswordResetForm.scss";

const PasswordResetForm = () => {
  let history = useHistory();
 

  const handleInput = (event) => {
    const userInput = event.target.value;
    const userInputName = event.target.name;
    const userInputsObj = { ...userDetails, [userInputName]: userInput };
    setUserDetails(userInputsObj);
  };


  const buttonJSX = () => {
    if (
      userDetails.firstName !== "" &&
      userDetails.lastName !== "" &&
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(userDetails.email)
    ) {
      return (
        <button className="password-reset-form__button--active" onClick={buttonClick}>
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
            required
          />
        </>
      );
    } 
    return (
        <div className="password-reset">
          <form action="submit" className="password-reset-form" onSubmit={handlepassword-reset}>
            {inputJSX()}
            {userDetailsStage ? buttonJSX() : twoButtonsJSX()}
          </form>
          <p className="password-reset-login">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      );
  };

  


export default PasswordResetForm;