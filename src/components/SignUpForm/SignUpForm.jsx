import React, { useState } from "react";
import { Link } from "react-router-dom";

import ShowPassword from "../../assets/login/show-password.svg";
import HidePassword from "../../assets/login/hide-password.svg";

import "./SignUpForm.scss";

const SignUpForm = () => {
  const [formValid, setFormValid] = useState({ firstName: "", lastName: "", email: "", password: "" })


  const handleInput = (event) => {
    console.log(event)
    const userInput = event.target.value
    const userInputName = event.target.name
    const userObject = { ...formValid, [userInputName]: userInput }
    setFormValid(userObject)
  }

  const [buttonActive, setButtonActive] = useState(false)

  const buttonJSX = () => {
    if (buttonActive) {
      return <button className="signup-form__button--active">Next</button>
    } else {
      return <button className="signup-form__button--disabled">Next</button>
    }
  }



  return (
    <div className="signup">
      <form action="submit" className="signup-form">
        <div className="signup-form__rectangle"></div>
        <h3 className="signup-form__header">Sign Up</h3>
        <label htmlFor="text" className="signup-form__label">
          First Name
        </label>
        <input type="text" id="first-name" className="signup-form__input" name="firstName" onChange={handleInput} />
        <label htmlFor="text" className="signup-form__label">
          Last Name
        </label>
        <input type="text" id="last-name" name="lastName" className="signup-form__input" onChange={handleInput} />
        <label htmlFor="email" className="signup-form__label">
          Email Address
        </label>
        <input type="email" name="email" id="email" className="login-form__input" onChange={handleInput} />
        {buttonJSX()}
      </form>

      <p className="signup-login">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default SignUpForm;
