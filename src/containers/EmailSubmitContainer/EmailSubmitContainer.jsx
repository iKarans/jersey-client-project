import React from 'react'
import EmailSubmit from '../../components/EmailSubmit/EmailSubmit'
import LoginPageNav from '../../components/LoginPageNav/LoginPageNav'
import ChatButton from '../../components/ChatButton/ChatButton'
import Logo from "../../assets/global/lujam-logo-white.svg";


const EmailSubmitContainer = () => {
    return (
        <div>
        <section className="forgotten-password-page">
        <LoginPageNav />
        <div className="forgotten-password-page__container">
          <img src={Logo} alt="lujam logo" />
          <EmailSubmit/>
        </div>
        <ChatButton />
      </section>
        </div>
    )
}

export default EmailSubmitContainer
