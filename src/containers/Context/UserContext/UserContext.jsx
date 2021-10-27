import React, { useState, createContext, useEffect } from "react";
import { auth } from "../../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

export const UserContext = createContext({});







const UserProvider = (props) => {
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    signOut(auth);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (authenticatedUser) => {
      if (authenticatedUser) {
        setUser(authenticatedUser);
        console.log("authenticated", authenticatedUser);
      } else {
        setUser(null);
        console.log("signed out");
      }
    });




  }, []);


  const userContext = {
    user,
    // handleLogin,
    handleLogout,
  };



  return (
    <UserContext.Provider value={userContext}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
