import React, { useState } from "react";
import { Link } from "react-router-dom";
import ShowPassword from "../../assets/login/show-password.svg";
import HidePassword from "../../assets/login/hide-password.svg";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

import "./LoginForm.scss";

const LoginForm = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, userDetails.email, userDetails.password);
  };

  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const handleInput = (event) => {
    const userInput = event.target.value;
    const userInputName = event.target.name;
    const userInputsObj = { ...userDetails, [userInputName]: userInput };
    setUserDetails(userInputsObj);
  };

  console.log(userDetails);

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login">
      <form action="submit" className="login-form">
        <div className="login-form__rectangle"></div>
        <h3 className="login-form__header">Login</h3>
        <label htmlFor="email" className="login-form__label">
          Email Address
        </label>
        <input
          type="text"
          id="email"
          name="email"
          className="login-form__input"
          onChange={handleInput}
          value={userDetails.email}
        />
        <label htmlFor="password" className="login-form__label">
          Password
        </label>
        <div className="login-form__password-container">
          <input
            type={!showPassword ? "password" : "text"}
            id="password"
            name="password"
            className="login-form__input"
            onChange={handleInput}
            value={userDetails.password}
          />
          {!showPassword && (
            <img
              src={HidePassword}
              className="hidepassword"
              alt="Hide password icon"
              onClick={handleShowPassword}
            />
          )}
          {showPassword && (
            <img
              src={ShowPassword}
              className="showpassword"
              alt="Show password icon"
              onClick={handleShowPassword}
            />
          )}
        </div>
        <div className="login-form__checkbox-container">
          <input
            type="checkbox"
            id="remember-me"
            className="login-form__checkbox"
          />
          <label htmlFor="remember-me" className="checkbox-label">
            Remember Me
          </label>
        </div>
        <button className="login-form__button" onClick={handleLogin}>Login</button>
      </form>

      <p className="login-signup">
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
      <p className="login-link">Forgotten Your Password?</p>
    </div>
  );
};

export default LoginForm;
