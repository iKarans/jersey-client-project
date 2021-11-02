import React from "react";
import "./AlertButton.scss";

const AlertButton = (props) => {
  const { isHigh, buttonText, iconImage, buttonNumber } = props;

  let buttonStyle = "alert-button__icon";

  isHigh ? (buttonStyle += "--high") : (buttonStyle += "--primary");

  return (
    <button className="alert-button">
      <div className="alert-button-icon-container">
        <div className={buttonStyle}>
            <img className="alert-button__icon--svg" src={iconImage} alt="alerts" />
        </div>
      </div>
     <div className="alert-button__info">
        <p className="alert-button__info--heading">{buttonText}</p>
        <p className="alert-button__info--number">{buttonNumber}</p>
     </div>
    </button>
  );
};

export default AlertButton;
