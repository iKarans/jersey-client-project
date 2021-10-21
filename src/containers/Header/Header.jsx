import React from "react";
import "./Header.scss";
import UserBar from "../../components/UserBar/UserBar";
import SecurityBar from "../../components/SecurityBar/SecurityBar";
import { useParams } from "react-router";

const Header = (props) => {
  const { pageHeading, deviceIndex, showAlert } = props;
  const { device } = useParams();

  return (
    <header className="header">
      <UserBar userName="Richard Kovacek" />
      <SecurityBar
        showAlert={showAlert}
        pageHeading={pageHeading}
        deviceIndex={deviceIndex}
        device={device}
      />
    </header>
  );
};

export default Header;
