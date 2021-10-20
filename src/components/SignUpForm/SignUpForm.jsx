import React, { useState } from "react";
import { Link } from "react-router-dom";

import ShowPassword from "../../assets/login/show-password.svg";
import HidePassword from "../../assets/login/hide-password.svg";

import { ReactComponent as ValidInputIcon } from "../../assets/login/green-tick.svg"
import { ReactComponent as InvalidInputIcon } from "../../assets/login/red-cross.svg"


import "./SignUpForm.scss";

const SignUpForm = () => {
  const [buttonActive, setButtonActive] = useState(false);
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [userDetailsStage, setUserDetailsStage] = useState(false);

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
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userDetails.email)

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

  const checkPasswordLengthJSX = () => {
    const passwordLength = userDetails.password.length
    if (passwordLength >= 6 & passwordLength <= 8) {
      return (
        <div className="valid-password">
          <ValidInputIcon />
          <p>Between 6 and 8 characters</p>
        </div>
      )
    } else {
      return (
        <div className="invalid-password">
          <InvalidInputIcon />
          <p>Between 6 and 8 characters</p>
        </div>
      )
    }
  }

  const checkPasswordHasUppercaseJSX = () => {
    const password = userDetails.password
    const lowerCasePassword = userDetails.password.toLowerCase()
    if (password != lowerCasePassword) {
      return (
        <div className="valid-password">
          <ValidInputIcon />
          <p>Contains at least 1 uppercase letter</p>
        </div>
      )
    } else {
      return (
        <div className="invalid-password">
          <InvalidInputIcon />
          <p>Contains at least 1 uppercase letter</p>
        </div>
      )
    }
  }

  const checkPasswordsMatchJSX = () => {
    if (userDetails.password == userDetails.confirmPassword) {
      return (
        <div className="valid-password">
          <ValidInputIcon />
          <p>Passwords match</p>
        </div>
      )
    } else {
      return (
        <div className="invalid-password">
          <InvalidInputIcon />
          <p>Passwords match</p>
        </div>
      )
    }
  }

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
            id="password-confirm"
            name="confirmPassword"
            className="signup-form__input"
            onChange={handleInput}
            required
          />
          <div className="signup-form__validation">
            <div className="signup-form__validation-item">
              {checkPasswordLengthJSX()}
            </div>
            <div className="signup-form__validation-item">
              {checkPasswordHasUppercaseJSX()}
            </div>
            <div className="signup-form__validation-item">
              {checkPasswordsMatchJSX()}
            </div>
          </div>
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
