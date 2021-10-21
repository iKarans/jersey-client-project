import React from "react";
import "./NetworkAlert.scss";

const NetworkAlert = (props) => {
  const { alertImg, alertText, atRisk, device } = props;

  let alertStyle = "network-alert";

  atRisk ? (alertStyle += "--risk") : (alertStyle += "--secure");

  return (
    <button className={alertStyle}>
      <img className="network-alert__img" src={alertImg} alt={alertText} />
      <p className="network-alert__text">{alertText}</p>
    </button>
  );
};

export default NetworkAlert;
