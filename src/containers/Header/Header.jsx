import React from "react";
import UserBar from "../../components/UserBar/UserBar";
import SecurityBar from "../../components/SecurityBar/SecurityBar";

const Header = () => {
  return (
    <header>
      <UserBar />
      <SecurityBar />
    </header>
  );
};

export default Header;
