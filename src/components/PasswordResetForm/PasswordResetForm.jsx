import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import ShowPassword from "../../assets/login/show-password.svg";
import HidePassword from "../../assets/login/hide-password.svg";
import { ReactComponent as ValidInputIcon } from "../../assets/login/green-tick.svg";
import { ReactComponent as InvalidInputIcon } from "../../assets/login/red-cross.svg";
import {
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from "firebase/auth";
import { auth } from "../../firebase";

import "./PasswordResetForm.scss";

const PasswordResetForm = () => {
  const user = auth.currentUser;
  const [newPassword, setNewPassword] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const handleInput = (event) => {
    const userInput = event.target.value;
    const userInputName = event.target.name;
    const userInputsObj = { ...newPassword, [userInputName]: userInput };
    setNewPassword(userInputsObj);
  };

  const [validPassword, setValidPassword] = useState({
    checkLength: false,
    checkUpperCase: false,
    checkMatch: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordReset = () => {
    const user = auth().currentUser;
    const credential = EmailAuthProvider.credentialWithLink(
      localStorage.getItem("emailForSignIn"),
      window.location.href
    );
    user.reauthenticateWithCredential(credential).then(() => {
      console.log("button fires");
      console.log(user);
      updatePassword(user, newPassword.newPassword)
        .then(() => {
          console.log("working");
        })
        .catch((error) => {
          console.log(error);
          console.log(" not working");
        });
    });
  };
  const checkPasswordLengthJSX = () => {
    const passwordLength = newPassword.newPassword.length;
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
    const lowerCasePassword = newPassword.newPassword.toLowerCase();
    if (newPassword.newPassword !== lowerCasePassword) {
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
      newPassword.newPassword === newPassword.confirmPassword &&
      newPassword.newPassword !== ""
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
  const buttonJSX = () => {
    const checksPass = Object.values(validPassword).every(
      (password) => password
    );
    return (
      <div>
        <button
          className="reset-form__button"
          onClick={handlePasswordReset}
          disabled={!checksPass}
        >
          Submit
        </button>
      </div>
    );
  };
  return (
    <div className="reset-form">
      <form className="reset-form__input">
        <label htmlFor="text" className="reset-form__label">
          password{" "}
        </label>
        <input
          type={!showPassword ? "password" : "text"}
          id="password"
          name="newPassword"
          className="signup-form__input"
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
        <label htmlFor="text" className="reset-form__label">
          confirm password{" "}
        </label>
        <input
          type={!showPassword ? "password" : "text"}
          id="password-confirm"
          name="confirmPassword"
          className="signup-form__input"
          onChange={handleInput}
          required
        />
      </form>

      <div className="reset-form__validation">
        <div className="reset-form__validation-item">
          {checkPasswordLengthJSX()}
        </div>
        <div className="reset-form__validation-item">
          {checkPasswordHasUppercaseJSX()}
        </div>
        <div className="reset-form__validation-item">
          {checkPasswordsMatchJSX()}
        </div>
        {buttonJSX()}
      </div>
    </div>
  );
};

export default PasswordResetForm;
