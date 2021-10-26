import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import ShowPassword from "../../assets/login/show-password.svg";
import HidePassword from "../../assets/login/hide-password.svg";

import { ReactComponent as ValidInputIcon } from "../../assets/login/green-tick.svg";
import { ReactComponent as InvalidInputIcon } from "../../assets/login/red-cross.svg";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import "./SignUpForm.scss";

const SignUpForm = () => {
  let history = useHistory();
  const handleSignUp = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      userDetails.email,
      userDetails.password
    );
    history.push("/");
  };
  const [validPassword, setValidPassword] = useState({
    checkLength: false,
    checkUpperCase: false,
    checkMatch: false,
  });

  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [userDetailsStage, setUserDetailsStage] = useState(true);

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleInput = (event) => {
    const userInput = event.target.value;
    const userInputName = event.target.name;
    const userInputsObj = { ...userDetails, [userInputName]: userInput };
    setUserDetails(userInputsObj);
  };

  const buttonClick = () => {
    setUserDetailsStage(false);
  };

  const buttonJSX = () => {
    if (
      userDetails.firstName !== "" &&
      userDetails.lastName !== "" &&
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(userDetails.email)
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
    const checksPass = Object.values(validPassword).every(
      (password) => password
    );

    return (
      <div className="signup-form__button-wrapper">
        <button
          className="signup-form__button--back"
          onClick={buttonGoBackClick}
        >
          Go Back
        </button>
        <button
          className="signup-form__button--signup"
          disabled={!checksPass}
          onClick={handleSignUp}
        >
          Sign Up
        </button>
      </div>
    );
  };

  const checkPasswordLengthJSX = () => {
    const passwordLength = userDetails.password.length;
    if ((passwordLength >= 6) & (passwordLength <= 8)) {
      const currentState = { ...validPassword, checkLength: true };
      if (!validPassword.checkLength) {
        setValidPassword(currentState);
      }
      return (
        <div className="valid-password">
          <ValidInputIcon />
          <p>Between 6 and 8 characters</p>
        </div>
      );
    } else {
      const currentState = { ...validPassword, checkLength: false };
      if (validPassword.checkLength) {
        setValidPassword(currentState);
      }
      return (
        <div className="invalid-password">
          <InvalidInputIcon />
          <p>Between 6 and 8 characters</p>
        </div>
      );
    }
  };

  const checkPasswordHasUppercaseJSX = () => {
    const password = userDetails.password;
    const lowerCasePassword = userDetails.password.toLowerCase();
    if (password !== lowerCasePassword) {
      const currentState = { ...validPassword, checkUpperCase: true };
      if (!validPassword.checkUpperCase) {
        setValidPassword(currentState);
      }
      return (
        <div className="valid-password">
          <ValidInputIcon />
          <p>Contains at least one uppercase letter</p>
        </div>
      );
    } else {
      const currentState = { ...validPassword, checkUpperCase: false };
      if (validPassword.checkUpperCase) {
        setValidPassword(currentState);
      }
      return (
        <div className="invalid-password">
          <InvalidInputIcon />
          <p>Contains at least one uppercase letter</p>
        </div>
      );
    }
  };

  const checkPasswordsMatchJSX = () => {
    if (
      userDetails.password === userDetails.confirmPassword &&
      userDetails.password !== ""
    ) {
      const currentState = { ...validPassword, checkMatch: true };
      if (!validPassword.checkMatch) {
        setValidPassword(currentState);
      }
      return (
        <div className="valid-password">
          <ValidInputIcon />
          <p>Passwords match</p>
        </div>
      );
    } else {
      const currentState = { ...validPassword, checkMatch: false };
      if (validPassword.checkMatch) {
        setValidPassword(currentState);
      }
      return (
        <div className="invalid-password">
          <InvalidInputIcon />
          <p>Passwords match</p>
        </div>
      );
    }
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
            value={userDetails.firstName}
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
            value={userDetails.lastName}
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
            value={userDetails.email}
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
          <label htmlFor="password" className="signup-form__label">
            Create Password
          </label>

          <div className="signup-form__password-container">
            <input
              type={!showPassword ? "password" : "text"}
              id="password"
              name="password"
              className="signup-form__input"
              value={userDetails.password}
              onChange={handleInput}
              required
            />
            {!showPassword && (
              <img
                src={HidePassword}
                className="hide-password"
                alt="Hide password icon"
                onClick={handleShowPassword}
              />
            )}
            {showPassword && (
              <img
                src={ShowPassword}
                className="show-password"
                alt="Show password icon"
                onClick={handleShowPassword}
              />
            )}
          </div>

          <label htmlFor="password" className="signup-form__label">
            Confirm Password
          </label>

          <div className="signup-form__password-container">
            <input
              type={!showPassword ? "password" : "text"}
              id="password-confirm"
              name="confirmPassword"
              className="signup-form__input"
              value={userDetails.confirmPassword}
              onChange={handleInput}
              required
            />
          </div>

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
      <form action="submit" className="signup-form" onSubmit={handleSignUp}>
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
