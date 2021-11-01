import React, { useState, createContext, useEffect } from "react";
import { auth } from "../../firebase";
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
      } else {
        setUser(null);
      }
    });
  }, []);

  const userContext = {
    user,
    handleLogout,
  };

  return (
    <UserContext.Provider value={userContext}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
