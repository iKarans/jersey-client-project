import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import { sendSignInLinkToEmail } from "firebase/auth";
import "./ForgottenPasswordForm.scss";

const ForgottenPasswordForm = () => {
  const [userEmail, setUserEmail] = useState("");
  const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: "http://localhost:3000/reset-password",
    // This must be true.
    handleCodeInApp: true,
  };

  const handleInput = (event) => {
    const emailInput = event.target.value;
    setUserEmail(emailInput);
  };
  const submitResetEmail = () => {
    sendSignInLinkToEmail(auth, userEmail, actionCodeSettings)
      .then(() => {
        // The link was successfully sent. Inform the user.
        // Save the email locally so you don't need to ask the user for it again
        // if they open the link on the same device.

        window.localStorage.setItem("emailForSignIn", userEmail);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ...
      });
  };

  // const buttonJSX = () => {
  //   if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(userEmail)) {
  //     return (
  //       <button className="--active" onClick={submitResetEmail}>
  //         Next
  //       </button>
  //     );
  //   } else {
  //     return (
  //       <button className="--disabled" disabled>
  //         Next
  //       </button>
  //     );
  //   }
  // };
  return (
    <div className="forgotten-password">
      <form>
        <input type="email" name="username" onInput={handleInput}></input>
      </form>
      <button className="--active" onClick={submitResetEmail}>
        Next
      </button>
      <p className="forgotten-password__login">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};
export default ForgottenPasswordForm;
