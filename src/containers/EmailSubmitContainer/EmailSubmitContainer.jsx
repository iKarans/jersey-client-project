import React from "react";
import EmailSubmit from "../../components/EmailSubmit/EmailSubmit";
import LoginPageNav from "../../components/LoginPageNav/LoginPageNav";
import ChatButton from "../../components/ChatButton/ChatButton";
import Logo from "../../assets/global/lujam-logo-white.svg";
import "./EmailSubmitContainer.scss";
const EmailSubmitContainer = () => {
  return (
    <div>
      <section className="email-submitted">
        <LoginPageNav />
        <div className="email-submitted__container">
          <img src={Logo} alt="lujam logo" />
          <EmailSubmit />
        </div>
        <ChatButton />
      </section>
    </div>
  );
};

export default EmailSubmitContainer;
