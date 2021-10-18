import React, { useState } from "react";
import {Link} from "react-router-dom";

import ShowPassword from "../../assets/login/show-password.svg";
import HidePassword from "../../assets/login/hide-password.svg";

import "./SignUpForm.scss";

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="signUp">
      <form action="submit" className="signUp-form">
        <div className="signUp-form__rectangle"></div>
        <h3 className="signUp-form__header">Sign Up</h3>
        <label htmlFor="text" className="signUp-form__label">
          First Name
        </label>
        <input type="text" id="first-name" className="signUp-form__input" />
        <label htmlFor="text" className="signUp-form__label">
          Last Name
        </label>
        <input type="text" id="last-name" className="signUp-form__input" />
        <label htmlFor="email" className="signUp-form__label">
          Email Address
        </label>
        <input type="email" id="email" className="login-form__input" />


        <button className="signUp-form__button">Sign Up</button>
      </form>

      <p className="signUp-login">
        Already have an account? <Link to = "/login">Login</Link>
      </p>
    </div>
  );
};

export default SignUpForm;
