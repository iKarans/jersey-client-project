import React, { useState } from "react";
import { Link } from "react-router-dom";

import ShowPassword from "../../assets/login/show-password.svg";
import HidePassword from "../../assets/login/hide-password.svg";

import "./SignUpForm.scss";

const SignUpForm = () => {

  

  return (
    <div className="signup">
      <form action="submit" className="signup-form">
        <div className="signup-form__rectangle"></div>
        <h3 className="signup-form__header">Sign Up</h3>
        <label htmlFor="text" className="signup-form__label">
          First Name
        </label>
        <input type="text" id="first-name" className="signup-form__input" />
        <label htmlFor="text" className="signup-form__label">
          Last Name
        </label>
        <input type="text" id="last-name" className="signup-form__input" />
        <label htmlFor="email" className="signup-form__label">
          Email Address
        </label>
        <input type="email" id="email" className="login-form__input" />


      </form>
      <p className="signup-login">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default SignUpForm;
