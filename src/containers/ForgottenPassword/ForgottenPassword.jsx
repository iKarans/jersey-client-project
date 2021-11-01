import ChatButton from "../../components/ChatButton/ChatButton.jsx";

import Logo from "../../assets/global/lujam-logo-white.svg";

import ForgottenPasswordForm from "../../components/ForgottenPasswordForm/ForgottenPaswordForm"

import "./ForgottenPassword.scss";

const ForgottenPassword = () => {
    return (
        <div>
            <section className="forgotten-password-page">
            <ForgottenPasswordForm />
             <div className="forgotten-password-page__container">
             <img src={Logo} alt="lujam logo" />
             
            </div>
            <ChatButton />
            </section>
        </div>
    )
}

export default ForgottenPassword