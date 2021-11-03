import ChatButton from "../../components/ChatButton/ChatButton.jsx";
import LoginPageNav from "../../components/LoginPageNav/LoginPageNav.jsx";
import Logo from "../../assets/global/lujam-logo-white.svg";
import PasswordResetForm from "../../components/PasswordResetForm/PasswordResetForm"

import "./PasswordReset.scss";

const PasswordReset = () => {
    return (
        <div>
            <section className="password-reset-page">
            <LoginPageNav />
             <div className="password-reset-page__container">
             <img src={Logo} alt="lujam logo" />
             <PasswordResetForm/>
             
            </div>
            <ChatButton />
            </section>
        </div>
    )
}

export default PasswordReset
