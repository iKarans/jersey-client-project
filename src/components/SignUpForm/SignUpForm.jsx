import React, { useState } from "react";
import { Link } from "react-router-dom";

import ShowPassword from "../../assets/login/show-password.svg";
import HidePassword from "../../assets/login/hide-password.svg";

import "./SignUpForm.scss";

const SignUpForm = () => {
  const [buttonActive, setButtonActive] = useState(false);
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    // password: "",
  });
  const [userDetailsStage, setUserDetailsStage] = useState(true);

  // Gathering User Form Inputs
  const handleInput = (event) => {
    const userInput = event.target.value;
    const userInputName = event.target.name;
    const userInputsObj = { ...userDetails, [userInputName]: userInput };
    setUserDetails(userInputsObj);
  };

  console.log(userDetails);

  const buttonClick = () => {
    setUserDetailsStage(false);
  };

  const buttonJSX = () => {
    if (
      userDetails.firstName !== "" &&
      userDetails.lastName !== "" &&
      userDetails.email !== ""
    ) {
      return (
        <button className="signup-form__button--active" onClick={buttonClick}>
          Next
        </button>
      );
    } else {
      return (
        <button className="signup-form__button--disabled" disabled>
          Next
        </button>
      );
    }
  };

  const buttonGoBackClick = () => {
    setUserDetailsStage(true);
  };

  const twoButtonsJSX = () => {
    return (
      <div className="signup-form__button-wrapper">
        <button
          className="signup-form__button--back"
          onClick={buttonGoBackClick}
        >
          Go Back
        </button>
        <button className="signup-form__button--signup" disabled>
          Sign Up
        </button>
      </div>
    );
  };

  const inputJSX = () => {
    if (userDetailsStage) {
      return (
        <>
          <div className="signup-form__rectangle"></div>
          <h3 className="signup-form__header">Sign Up</h3>
          <label htmlFor="text" className="signup-form__label">
            First Name
          </label>
          <input
            type="text"
            id="first-name"
            className="signup-form__input"
            name="firstName"
            onChange={handleInput}
            required
          />
          <label htmlFor="text" className="signup-form__label">
            Last Name
          </label>
          <input
            type="text"
            id="last-name"
            name="lastName"
            className="signup-form__input"
            onChange={handleInput}
            required
          />
          <label htmlFor="email" className="signup-form__label">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="login-form__input"
            onChange={handleInput}
            required
          />
        </>
      );
    } else {
      return (
        <>
          <div className="signup-form__rectangle"></div>
          <h3 className="signup-form__header">Sign Up</h3>
          <label htmlFor="text" className="signup-form__label">
            Create Password
          </label>
          <input
            type="text"
            id="password"
            name="password"
            className="signup-form__input"
            onChange={handleInput}
            required
          />
          <label htmlFor="text" className="signup-form__label">
            Confirm Password
          </label>
          <input
            type="text"
            id="password"
            name="password"
            className="signup-form__input"
            onChange={handleInput}
            required
          />
        </>
      );
    }
  };

  return (
    <div className="signup">
      <form action="submit" className="signup-form">
        {inputJSX()}
        {userDetailsStage ? buttonJSX() : twoButtonsJSX()}
      </form>
      <p className="signup-login">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default SignUpForm;
