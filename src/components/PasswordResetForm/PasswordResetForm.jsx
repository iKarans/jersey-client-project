import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import ShowPassword from "../../assets/login/show-password.svg";
import HidePassword from "../../assets/login/hide-password.svg";
import { useState } from "react";
import { ReactComponent as ValidInputIcon } from "../../assets/login/green-tick.svg";
import { ReactComponent as InvalidInputIcon } from "../../assets/login/red-cross.svg";
import { updatePassword } from "firebase/auth";
import { auth } from "../../firebase";


import "./PasswordResetForm.scss";

const PasswordResetForm = () => {
  const user = auth.currentUser;
  const [newPassword, setNewPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [validPassword, setValidPassword] = useState({
    checkLength: false,
    checkUpperCase: false,
    checkMatch: false,
  });
  const handlePasswordReset = (event) => {
   

    updatePassword(user, newPassword).then(() => {
  // Update successful.
      }).catch((error) => {
  // An error ocurred
  // ...
      });
  }

  const checkPasswordsMatch = () => {
    if (
      newPassword === confirmPassword
    ) { 
      const currentState = { ...validPassword, checkMatch: true };
      if (!validPassword.checkMatch) {
        setValidPassword(currentState);
      }
    
    };
  }

  const checkPasswordLength = () =>{
    if((newPassword.length >= 6) & (newPassword.length <= 8)){
      const currentState = { ...validPassword, checkLength: true };
      if (!validPassword.checkLength) {
        setValidPassword(currentState);
      }
    }

  }

  const checkUpperCase = () => {
    const password = newPassword
    const lowerCasePassword = newPassword.toLowerCase();
    if(password !== lowerCasePassword){
      const currentState = { ...validPassword, checkUpperCase: true };
      if (!validPassword.checkUpperCase) {
      setValidPassword(currentState);
      }}
  }

  return(
    <div>
    <form>
      <input onChange={setNewPassword}>password</input>
      <input onChange={setConfirmPassword}>check password</input>
    </form>
    <button onSubmit={checkPasswords}>Submit</button>
    </div>
  )

  
  
};

export default PasswordResetForm;
