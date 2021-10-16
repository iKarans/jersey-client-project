import React from "react";

import LoginPageNav from "../../components/LoginPageNav/LoginPageNav";
import LoginForm from "../../components/LoginForm/LoginForm";
import ChatButton from "../../components/ChatButton/ChatButton.jsx";

import Logo from "../../assets/global/lujam-logo-white.svg";

import "./Login.scss";

const Login = () => {
  return (
    <section className="login-page">
      <LoginPageNav />
      <div className="login-page__container">
        <img src={Logo} alt="lujam logo" />
        <LoginForm />
      </div>
      <ChatButton />
    </section>
  );
};

export default Login;
