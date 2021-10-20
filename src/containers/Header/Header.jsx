import React from "react";
import "./Header.scss";
import UserBar from "../../components/UserBar/UserBar";
import SecurityBar from "../../components/SecurityBar/SecurityBar";

const Header = (props) => {
  const {pageHeading, deviceIndex} = props;
  return (
    <header className="header">
      <UserBar userName="Richard Kovacek" />
      <SecurityBar pageHeading={pageHeading} deviceIndex={deviceIndex} />
    </header>
  );
};

export default Header;
