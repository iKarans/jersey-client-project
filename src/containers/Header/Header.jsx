import React from "react";
import "./Header.scss";
import UserBar from "../../components/UserBar/UserBar";
import SecurityBar from "../../components/SecurityBar/SecurityBar";

const Header = (props) => {
  const {pageHeading} = props;
  return (
    <header className="header">
      <UserBar userName="Richard Kovacek" />
      <SecurityBar pageHeading={pageHeading} />
    </header>
  );
};

export default Header;
