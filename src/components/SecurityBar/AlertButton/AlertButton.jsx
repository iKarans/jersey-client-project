import React from "react";
import "./AlertButton.scss";

const AlertButton = (props) => {
  const { isHigh, buttonText, iconImage, buttonNumber } = props;

  let buttonStyle = "button__icon";

  isHigh ? (buttonStyle += " high") : (buttonStyle += " primary");

  return (
    <div className="button">
      <div className={buttonStyle}>
        <img className="button__icon--svg" src={iconImage} alt="alerts" />
      </div>
      <div className="button__info">
        <p className="button__info--heading">{buttonText}</p>
        <p className="button__info--number">{buttonNumber}</p>
      </div>
    </div>
  );
};

export default AlertButton;
