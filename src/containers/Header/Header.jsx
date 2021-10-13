import React from "react";
import "./Header.scss";
import UserBar from "../../components/UserBar/UserBar";
import SecurityBar from "../../components/SecurityBar/SecurityBar";

const Header = () => {
  return (
    <header className="header">
      <UserBar />
      <SecurityBar />
    </header>
  );
};

export default Header;
