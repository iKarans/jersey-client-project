import ChatButton from "../../components/ChatButton/ChatButton.jsx";
import ForgottenPasswordForm from "../../components/ForgottenPasswordForm/ForgottenPaswordForm";

import "./ForgottenPassword.scss";

const ForgottenPassword = () => {
  return (
    <div>
      <section className="forgotten-password-page">
        <ForgottenPasswordForm />
        <ChatButton />
      </section>
    </div>
  );
};

export default ForgottenPassword;
