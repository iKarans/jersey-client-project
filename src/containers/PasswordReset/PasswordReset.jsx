import ChatButton from "../../components/ChatButton/ChatButton.jsx";

import Logo from "../../assets/global/lujam-logo-white.svg";

import "./PasswordReset.scss";

const PasswordReset = () => {
    return (
        <div>
            <section className="forgotten-password-page">
            <LoginPageNav />
             <div className="forgotten-password-page__container">
             <img src={Logo} alt="lujam logo" />
             
            </div>
            <ChatButton />
            </section>
        </div>
    )
}

export default PasswordReset